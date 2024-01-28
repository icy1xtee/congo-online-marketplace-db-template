const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate({ Cart, ProductItem }) {
      this.belongsTo(Cart, { foreignKey: 'cart_id' });
      this.belongsTo(ProductItem, { foreignKey: 'productItem_id' });
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
