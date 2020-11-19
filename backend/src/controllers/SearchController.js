const Receita = require('../models/Receita');

module.exports = {
    async index(request, response) {
        const { name, ingredients } = request.query;
        //const receitas = await Receita.find();
        // buscar receitas a partir de ingredientes

        const ingredientsArray = parseStringAsArray(ingredients);
        
        const receitas = await Receita.find({
            ingredients: {
                $in: ingredientsArray,
            }
        });

        return response.json({receitas });
    }
}