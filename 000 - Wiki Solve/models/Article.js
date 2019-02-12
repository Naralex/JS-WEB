const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true, unique: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    edits: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Edit'} ]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;