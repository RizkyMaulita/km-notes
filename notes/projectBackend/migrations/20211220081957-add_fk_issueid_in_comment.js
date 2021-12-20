'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('Comments', {
      fields: ['issueId'],
      type: 'foreign key',
      name: 'fk_issueid_in_comments',
      references: { //Required field
        table: 'Issues',
        field: 'issueId'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('Comments', 'fk_issueid_in_comments', {})
  }
};
