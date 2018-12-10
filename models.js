const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'codechella_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
})
module.exports = {
  sequelize
}
