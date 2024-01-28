const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
