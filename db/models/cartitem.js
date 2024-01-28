'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartItem.init({
    cart_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Carts',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    productItem_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductItems',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};