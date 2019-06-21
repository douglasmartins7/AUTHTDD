require("dotenv").config({
  /*se eu tiver uma variavel de ambiente node_env e ela for igual a test eu carrego o arquivo .env.test senão eu carrego o proprio arquivo .env */
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env" 
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database.sqlite",
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

