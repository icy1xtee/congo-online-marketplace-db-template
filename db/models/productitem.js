const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductItem extends Model {
    static associate({ OrderItem, Product }) {
      this.hasMany(OrderItem, { foreignKey: 'productItem_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  ProductItem.init({
    size: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    count: {
      type: DataTypes.INTEGER,
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
    modelName: 'ProductItem',
  });
  return ProductItem;
};
