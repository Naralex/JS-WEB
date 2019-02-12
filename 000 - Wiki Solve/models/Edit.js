const mongoose = require('mongoose');

const editSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true, unique: true },
    content: { type: mongoose.Schema.Types.String, required: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

const Edit = mongoose.model('Edit', editSchema);

module.exports = Edit;