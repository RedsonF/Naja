const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    }
);

module.exports = model('Item', ItemSchema);