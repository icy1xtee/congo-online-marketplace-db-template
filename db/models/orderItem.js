'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItem.init({
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
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
    modelName: 'OrderItem',
  });
  return OrderItem;
};