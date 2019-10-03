const express = require('express');
const ItemController = require('../controllers/ItemController');
const authMiddleware = require('../middlewares/AuthMiddleware');

const routes = express.Router();

routes.post("/item", /*authMiddleware,*/ ItemController.adicionar);
routes.get("/item/categoria", /*authMiddleware,*/ ItemController.exibirPorCategoria);
routes.get("/item/", /*authMiddleware,*/ ItemController.exibir);
routes.put("/item", /*authMiddleware,*/ ItemController.alterarQuantidade);
routes.delete("/item", /*authMiddleware,*/ ItemController.remover);

module.exports = routes;