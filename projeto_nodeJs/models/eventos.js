'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Eventos.init({
    ev_nome: DataTypes.STRING,
    ev_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Eventos',
    tableName: 'eventos'
  });
  return Eventos;
};