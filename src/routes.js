const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
    name: "Diego",
    email: "diego@rocketseat.com.br",
    password_hash: "654654654654654654"
});

 // Definição rotas

 module.exports = routes;