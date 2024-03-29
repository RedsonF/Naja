const ItemService = require('../services/ItemService');

module.exports = {
    async adicionar(req, res) {
        try {
            const {nome, categoria, preco, quantidade, img} = req.body;

            return res.json(await ItemService.adicionar(nome, categoria, preco, quantidade, img));

        } catch (error) {
            return res.status(400).json({ error:error.message });
        }
    },

    async exibir(req, res) {
        try {
            return res.json(await ItemService.exibir());

        } catch (error) {
            return res.status(400).json({ error:error.message });
        }
        
    },

    async exibirPorCategoria(req, res) {
        try {
            const categoria = req.query.categoria;

            return res.json(await ItemService.exibirPorCategoria(categoria));

        } catch (error) {
            return res.status(400).json({ error:error.message });
        }
    },

    async alterarQuantidade(req, res) {
        try {
            const { id, quantidade, tipo } = req.body;
      
            return res.json(await ItemService.alterarQuantidade(id, quantidade, tipo));

        } catch (error) {
            return res.status(400).json({ error:error.message });
        }
    },

    async remover(req, res) { 
        try {
            const id = req.query.id;

            return res.json(await ItemService.remover(id));

        } catch (error) {
            return res.status(400).json({ error:error.message });
        }
    }
}