const mongoose = require('mongoose');
const { Schema } = mongoose;

// Model Names
const NamesSchema = new Schema({
    id: { type: Number, required: true },
	name: { type: String, require: true },
}, { versionKey: false });

module.exports = mongoose.model('Names', NamesSchema);
