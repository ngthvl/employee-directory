const sequelize = require('../boot/db.mysql');
const { DataTypes } = require("sequelize");

const TimeLogModel = sequelize.define("time_logs", {
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    time_in: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time_out: {
        type: DataTypes.DATE,
        allowNull: true
    },
    total_hours: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
});

sequelize.sync().then(() => {
    console.log('Time Logs table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = TimeLogModel;
