const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({
      Review, Favorite, Image, ProductItem, Category,
    }) {
      this.hasMany(Review, { foreignKey: 'product_id' });
      this.hasMany(Favorite, { foreignKey: 'product_id' });
      this.hasMany(Image, { foreignKey: 'product_id' });
      this.hasMany(ProductItem, { foreignKey: 'product_id' });
      this.belongsTo(Category, { foreignKey: 'category_id' });
    }
  }
  Product.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
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
    modelName: 'Product',
  });
  return Product;
};
