const fs = require('fs/promises');
const path = require('path');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const jsonTemplate = await fs.readFile(path.join(__dirname, '..', 'json-template-base', 'template-cartItems.json'), 'utf-8');
    const array = JSON.parse(jsonTemplate);
    const dataToInsert = array.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('CartItems', dataToInsert, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('CartItems', null, {});
  },
};
