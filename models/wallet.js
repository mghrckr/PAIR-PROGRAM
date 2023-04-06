'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wallet.belongsTo(models.User)
    }
  }
  Wallet.init({
    walletName: DataTypes.STRING,
    balance: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};