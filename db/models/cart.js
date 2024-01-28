const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ Customer, CartItem }) {
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
      this.hasMany(CartItem, { foreignKey: 'cart_id' });
    }
  }
  Cart.init({
    customer_id: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      },
      onDelete: 'CASCADE',
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
    modelName: 'Cart',
  });
  return Cart;
};
