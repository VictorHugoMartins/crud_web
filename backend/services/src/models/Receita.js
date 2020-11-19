const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    ingredients:  {
        type: String,
        required: true 
    },
    autor:  {
        type: String,
        required: true 
    },
    photo:  {
        type: String,
        required: true 
    } // ?
});

module.exports = mongoose.model('Receita', ReceitaSchema)
