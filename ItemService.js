const Item = require('./Item');

module.exports = {
    async adicionar(nome, categoria, preco, quantidade) {
        const item = await Item.create({
            nome,
            categoria,
            preco, 
            quantidade
        });
    
        return item;
    },

    async exibirPorCategoria(categoria) {
        const item = await Item.find(categoria);

        return item;
    },

    async remover(id) {
        const item = await Item.findByIdAndDelete(id);

        return item;
    }
}