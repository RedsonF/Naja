const ItemService = require('./ItemService');

module.exports = {
    async adicionar(req, res) {
        const { nome, categoria, preco, quantidade, img } = req.body;

        return res.json(await ItemService.adicionar(nome, categoria, preco, quantidade, img));
    },

    async exibir(req, res) {
        return res.json(await ItemService.exibir());
    },

    async exibirPorCategoria(req, res) {
        const categoria = req.query;

        return res.json(await ItemService.exibirPorCategoria(categoria));
    },

    async alterarQuantidade(req, res) {
        const { id, quantidade, tipo } = req.body;
      
        return res.json(await ItemService.alterarQuantidade(id, quantidade, tipo));
    },

    async remover(req, res) {
        const id = req.query.id;

        return res.json(await ItemService.remover(id));
    }
}