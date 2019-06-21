require("dotenv").config({
    /*se eu tiver uma variavel de ambiente node_env e ela for igual a test eu carrego o arquivo .env.test senão eu carrego o proprio arquivo .env */
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env" 
});

const express = require('express');

//logica de criação de servidor
class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new AppController().express;