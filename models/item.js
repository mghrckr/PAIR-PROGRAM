'use strict';
const {
  Model
} = require('sequelize');
const wallet = require('./wallet');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User)
    }
  }
  Item.init({
    itemName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};