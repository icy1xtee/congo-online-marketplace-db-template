/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      size: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      count: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('ProductItems');
  },
};
