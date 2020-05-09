const express = require('express');
const router = express.Router();

// Controllers
const namesController = require('../app/v1/controllers/namesController');

module.exports = app => {
    
    // Routes Names
    router.get('/name/query/:id', namesController.readById);
    router.post('/name/store', namesController.create);

    app.use('/api/v1', router);
}