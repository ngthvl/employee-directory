const { Sequelize } = require("sequelize");

const {
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_CONNECTION,
} = require('../config/database');

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_CONNECTION
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize
