const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      // here
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
