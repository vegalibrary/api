const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    NAME: {
        type: DataTypes.STRING
    },
    PUB: {
        type: DataTypes.STRING
    },
    ICON: {
        type: DataTypes.STRING
    },
    RATE: {
        type: DataTypes.INTEGER
    },
    DESC: {
        type: DataTypes.INTEGER
    },
    IMAGES: {
        type: DataTypes.JSON
    },
    LINKS: {
        type: DataTypes.JSON
    },
}, {
    sequelize,
    modelName: 'apps',
    timestamps: false,
});

module.exports = User;