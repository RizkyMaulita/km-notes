'use strict';
const fs = require('fs')

const data = fs.readFileSync('./data/user.csv', 'utf-8').split('\n').slice(1).map(user => user.split(','))

const dataUser = []

data.forEach(user => {
  const name = user[0]
  const email = user[1]
  const password = user[2]
  const temp = {
    name,
    email,
    password,
    createdAt: new Date(),
    updatedAt: new Date()
  }
 dataUser.push(temp)
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
    await queryInterface.bulkInsert('Users', dataUser, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {})
  }
};
