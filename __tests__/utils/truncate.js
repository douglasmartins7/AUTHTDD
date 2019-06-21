/* 
    Ele percorrer todas as tabelas do banco e deleta todos os dados de dentro
*/

const { sequelize } = require("../../src/app/models");

module.exports = () => {
    return Promise.all(
        Object.keys(sequelize.models).map(key => {
            return sequelize.models[key].destroy({ truncate: true, force: true});
        })
    );
};