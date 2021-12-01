'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist_Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Playlist_Track.init({
    playlistId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Playlist_Track',
    paranoid: true
  });
  return Playlist_Track;
};