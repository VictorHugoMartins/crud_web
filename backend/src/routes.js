const { Router } = require('express');
const ReceitaController = require('./controllers/ReceitaController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

// index, show, store, update, destroy
// show p/ 1 só index todos 

routes.get('/receitas', ReceitaController.findReceitas);
routes.post('/receitas', ReceitaController.createReceita);
routes.get('/receitas/:id', ReceitaController.findReceita);
routes.put('/receitas/:id', ReceitaController.updateReceita);
routes.delete('/receitas/:id', ReceitaController.deleteReceita);

module.exports = routes;