/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReviewLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id',
        },
        defaultValue: 1,
      },
      review_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Reviews',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('ReviewLikes');
  },
};
