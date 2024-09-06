const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('appsStore', 'apps', 'apps', {
    dialect: 'sqlite',
    host: './data/apps.sqlite'
})

module.exports = sequelize;