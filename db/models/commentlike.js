const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CommentLike extends Model {
    static associate({ Customer, Comment }) {
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
      this.belongsTo(Comment, { foreignKey: 'comment_id' });
    }
  }
  CommentLike.init({
    customer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      },
      defaultValue: 1,
    },
    comment_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Comments',
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
    modelName: 'CommentLike',
  });
  return CommentLike;
};
