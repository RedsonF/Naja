const ItemService = require('./ItemService');

module.exports = {
    async adicionar(req, res) {
        const { nome, categoria, preco, quantidade} = req.body;

        return res.json(await ItemService.adicionar(nome, categoria, preco, quantidade));
    },
    
    async exibirPorCategoria(req, res) {
        const categoria = req.query;

        return res.json(await ItemService.exibirPorCategoria(categoria));
    },

    async remover(req, res) {
        const id = req.query.id;

        return res.json(await ItemService.remover(id));
    }
}