const express = require('express');

const routes = require('./routes');

const server = express();

//server.use(express.json());
//server.use(routes);

server.get('/nome', (req, res) => {
    return res.send("redson");
});

server.listen(4444);