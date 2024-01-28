const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReviewLike extends Model {
    static associate({ Customer, Review }) {
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
      this.belongsTo(Review, { foreignKey: 'review_id' });
    }
  }
  ReviewLike.init({
    customer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      },
      defaultValue: 1,
    },
    review_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Reviews',
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
    modelName: 'ReviewLike',
  });
  return ReviewLike;
};
