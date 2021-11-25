'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('Playlist_Tracks', {
      fields: ['playlistId'],
      type: 'foreign key',
      name: 'fk_playlist_in_playlist_track',
      references: { //Required field
        table: 'Playlists',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Playlist_Tracks', {
      fields: ['trackId'],
      type: 'foreign key',
      name: 'fk_tracks_in_playlist_track',
      references: { //Required field
        table: 'Tracks',
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
     await queryInterface.removeConstraint('Playlist_Tracks', 'fk_playlist_in_playlist_track', {})
     await queryInterface.removeConstraint('Playlist_Tracks', 'fk_tracks_in_playlist_track', {})
  }
};
