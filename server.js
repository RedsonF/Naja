const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Item/ItemRoutes');
const server = express();

mongoose.connect("mongodb+srv://redson:redson9444@cluster0-fk1sc.mongodb.net/test?retryWrites=true&w=majority",
    { reconnectTries: Number.MAX_VALUE, 
    useNewUrlParser: true,
    reconnectInterval: 500,
    poolSize: 5,
    useUnifiedTopology: true });

server.use(express.json());
server.use(routes);

let port = process.env.PORT || 4444;

server.listen(port);