'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('Tracks', {
      fields: ['singerId'],
      type: 'foreign key',
      name: 'fk_singer_in_track',
      references: { //Required field
        table: 'Singers',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Tracks', {
      fields: ['albumId'],
      type: 'foreign key',
      name: 'fk_album_in_track',
      references: { //Required field
        table: 'Albums',
        field: 'id'
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
     await queryInterface.removeConstraint('Tracks', 'fk_singer_in_track', {})
     await queryInterface.removeConstraint('Tracks', 'fk_album_in_track', {})
  }
};
