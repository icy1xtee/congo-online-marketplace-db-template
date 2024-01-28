const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Image.init({
    url: {
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
    modelName: 'Image',
  });
  return Image;
};
