const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ OrderItem, Customer }) {
      this.hasMany(OrderItem, { foreignKey: 'order_id' });
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
    }
  }
  Order.init({
    customer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    status: {
      type: DataTypes.TEXT,
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
    modelName: 'Order',
  });
  return Order;
};
