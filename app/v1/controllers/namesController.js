const nameController = {}
const { check, validationResult } = require('express-validator');

// Import Models
const Names = require('../models/Names');

nameController.readById = [
    // Validations Rules
    [ check('id').isNumeric().withMessage('the id must be of numeric type') ],
    async (req, res) => {

        // Validated ID
        if (!validationResult(req).isEmpty()) return res.status(400).json({ errors: validationResult(req).array() });

        // Destructuring Data
        const { id } = req.params;

        await Names.findOne({ id }, (err, name) => {

            // If an error occurred while querying - return errors
            console.error(err);
            if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });
            
            // If name it has no value - return errors
            if (!name) return res.status(404).send({ message: 'ID Name not found', data: null });
            
            // Returns Data
            return res.status(200).send({ message: 'Read Name By ID Successfuly', data: name });
        });
    }
];

nameController.create = [
    // Validations Rules
    [
        check('id').isNumeric().withMessage('the id must be of numeric type'),
        check('name').isString().withMessage('the name must be of type string').isLength({ min: 3 }).withMessage('must be at least 3 chars long') // name must be at least 3 chars long
    ],
    async (req, res) => {

        // Validated ID and Name
        if (!validationResult(req).isEmpty()) return res.status(400).json({ errors: validationResult(req).array() });

        // Destructuring Data
        const { id, name } = req.body;

        try {
            // Search ID
            existID = await Names.findOne({ id });

            // If exist ID return errors
            if (existID) return res.status(409).send({ message: 'The id is already in use', data: null});
            
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: 'Internal Error Server', data: null });
        }

        // Create Object    
        const newName = new Names({ id, name });
        await newName.save((err, name) => {

            // If an error occurred while querying - return errors
            console.error(err);
            if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });

            // Returns Data
            return res.status(200).send({ message: 'You are registered successfuly', data: name });
        });    
    }
];

module.exports = nameController;