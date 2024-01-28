const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ CommentLike, Customer, Review }) {
      this.hasMany(CommentLike, { foreignKey: 'comment_id' });
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
      this.belongsTo(Review, { foreignKey: 'review_id' });
    }
  }
  Comment.init({
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
    message: {
      allowNull: false,
      type: DataTypes.TEXT,
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
    modelName: 'Comment',
  });
  return Comment;
};
