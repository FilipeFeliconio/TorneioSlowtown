'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Luta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      atleta_a: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      atleta_b: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      juiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vencedor: {
        type: Sequelize.INTEGER
      },
      etapa_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Luta');
  }
};