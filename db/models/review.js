const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate({
      ReviewLike, Comment, Customer, Product,
    }) {
      this.hasMany(ReviewLike, { foreignKey: 'review_id' });
      this.hasMany(Comment, { foreignKey: 'review_id' });
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Review.init({
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
    message: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      allowNull: false,
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
    modelName: 'Review',
  });
  return Review;
};
