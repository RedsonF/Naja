const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/ItemRoutes');
const usuarioRoutes = require('./routes/UsuarioRoutes');
const server = express();

mongoose.connect("mongodb+srv://redson:9444@cluster0-biitu.mongodb.net/najabd?retryWrites=true&w=majority",
    { reconnectTries: Number.MAX_VALUE, 
    useNewUrlParser: true,
    reconnectInterval: 500,
    poolSize: 5,
    useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Conectado com o bd!');
})
    
mongoose.connection.on('error', (err) => {
    console.log("Erro na conexão com o bd " + err);
});
    

server.use(express.json());
server.use(usuarioRoutes);
server.use(itemRoutes);

let port = process.env.PORT || 4444;

server.listen(port);