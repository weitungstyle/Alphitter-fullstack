'use strict'

const bcrypt = require('bcryptjs')
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PASSWORD = '12345678'
    await queryInterface.bulkInsert('Users', [{
      account: 'root',
      email: 'root@example.com',
      password: await bcrypt.hash(PASSWORD, 10),
      name: 'root',
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    }, ...Array.from({ length: 10 }).map((_, i) => ({
      account: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      password: bcrypt.hashSync(PASSWORD, 10),
      name: `user${i + 1}`,
      avatar: `https://loremflickr.com/320/240/portrait/?random=${Math.random() * 100}`,
      introduction: faker.lorem.paragraph(),
      role: 'user',
      created_at: new Date(),
      updated_at: new Date()
    }))
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {})
  }
}
