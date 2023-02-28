const { Sequelize , Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Project.init(
  {
    body: {
        type:DataTypes.STRING,
        allowNull: false
    }
},
  {
    sequelize,
  }
);

module.exports = Comment;