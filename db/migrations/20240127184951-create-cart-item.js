/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CartItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cart_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      productItem_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ProductItems',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CartItems');
  },
};
