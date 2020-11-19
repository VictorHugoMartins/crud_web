const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema({
    name: String,
    ingredients: String,
    autor: String,
    photo: String // ?
});

module.exports = mongoose.model('Receita', ReceitaSchema)
