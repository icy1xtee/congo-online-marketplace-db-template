const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate({
      Order, Favorite, Review, ReviewLike, Comment, CommentLike, Cart,
    }) {
      this.hasMany(Order, { foreignKey: 'customer_id' });
      this.hasMany(Favorite, { foreignKey: 'customer_id' });
      this.hasMany(Review, { foreignKey: 'customer_id' });
      this.hasMany(ReviewLike, { foreignKey: 'customer_id' });
      this.hasMany(Comment, { foreignKey: 'customer_id' });
      this.hasMany(CommentLike, { foreignKey: 'customer_id' });
      this.hasOne(Cart, { foreignKey: 'customer_id' });
    }
  }
  Customer.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.TEXT,
    },
    phone: {
      unique: true,
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
    modelName: 'Customer',
  });
  return Customer;
};
