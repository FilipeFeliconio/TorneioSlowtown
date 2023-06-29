'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Etapa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Luta}) {
      // define association here
      this.hasMany(Luta, {
        foreignKey: 'etapa_id'
      });
    }
  }
  Etapa.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Etapa',
  });
  return Etapa;
};