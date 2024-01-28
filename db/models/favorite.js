const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ Customer, Product }) {
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Favorite.init({
    customer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      },
      defaultValue: 1,
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
    modelName: 'Favorite',
  });
  return Favorite;
};
