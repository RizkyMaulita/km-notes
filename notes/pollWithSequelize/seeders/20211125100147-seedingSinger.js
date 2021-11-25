'use strict';
const data = require('../data/singer.json')

const dataSinger = []

data.forEach(singer => {
  const temp = {
    name: singer.name,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  dataSinger.push(temp)
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Singers', dataSinger, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Singers', null, {});
  }
};
