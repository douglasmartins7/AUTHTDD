'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  // nome da tabela users
   return queryInterface.createTable('users', {
     //campo id 
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       //esse campo é sempre obrigatorio
       allowNull: false,
     },
     name: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     email: {
       type: Sequelize.STRING,
       unique: true,
       allowNull: false,
     },
     // guarda o hash da senha do usuario, ela será incriptada para dentro do banco para não ser raqueada com facilidade
     password_hash: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     created_at: {
       type: Sequelize.DATE,
       allowNull: false,
     },
     updated_at: {
       type: Sequelize.DATE,
       allowNull: false,
     },
   });
  },
   //A
  // o que a nossa migration vai fazer caso a gente volte atraz assim deletando a tabela
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('users');
  }
};
