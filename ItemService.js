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
        const itensOrdenados = this.ordernar(itens);

        return itensOrdenados;
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
    },

    async ordernar(lista) {
        const listaOrdenada = lista.sort(function(a, b) {
            if (a.quantidade < b.quantidade) 
                return 1;
            if (a.quantidade > b.quantidade) 
                return -1;
            else
                return 0;
        });
        return listaOrdenada;
    }
}