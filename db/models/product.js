const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
