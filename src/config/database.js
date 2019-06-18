module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  dialect: 'postgres',
  // disable warning for sequelize
  operatorAliases: false,
  // não mostrar muitos logs enquanto estão rodando as migrations
  logging: false,
  define: {
    // toda a tabela que criamos no banco venha com o create add e update add que marca a data de criação e atualização de cada registro de forma unica e automaticamente
    timestamp: true,
    // troca o nome da tabela criado de camel case para undercore format
    undercoredd: true,
    // troca os campos da tabela para underscore format
    underscoredALL: true
  }
};

