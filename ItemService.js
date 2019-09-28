const Item = require('./Item');

module.exports = {
    async adicionar(nome, categoria, preco, quantidade, img) {
        const item = await Item.create({
            nome,
            categoria,
            preco, 
            quantidade,
            img
        });
    
        return item;
    },

    async exibirPorCategoria(categoria) {
        const itens = await Item.find(categoria);

        return itens;
    },

    async alterarQuantidade(id, quantidade, tipo) {
        const item = await Item.findById(id);
        
        if (tipo == "adicionar") 
            item.quantidade += quantidade;
        else
            item.quantidade -= quantidade;
        
        await item.save();
        
        return item;
    },

    async remover(id) {
        const item = await Item.findByIdAndDelete(id);

        return item;
    }
}