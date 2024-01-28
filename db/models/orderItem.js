const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, ProductItem }) {
      this.belongsTo(Order, { foreignKey: 'order_id' });
      this.belongsTo(ProductItem, { foreignKey: 'productItem_id' });
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
