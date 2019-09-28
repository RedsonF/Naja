const express = require('express');
const ItemController = require('./ItemController');

const routes = express.Router();

routes.post("/item", ItemController.adicionar);
routes.get("/item", ItemController.exibirPorCategoria);
routes.put("/item", ItemController.alterarQuantidade);
routes.delete("/item", ItemController.remover);

module.exports = routes;