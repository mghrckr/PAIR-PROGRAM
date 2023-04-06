'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Item)
      User.hasOne(models.Wallet)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg : `masa kamu ga ada nama, ga aqiqah yah chuaks!`
        },
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate : {
        notNull: {
          msg : `zaman gini ga ada email???`
        },
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg : `masa kamu ga ada password, ga kepikiran yah? kasihan...`
        },
        notEmpty: true
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg : `pilih salah satu wahai budiman!`
        },
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};