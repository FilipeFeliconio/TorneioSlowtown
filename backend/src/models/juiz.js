'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Juiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Luta}) {
      // define association here
      this.hasMany(Luta, {
        foreignKey: 'juiz_id', as: 'lutas'
      });
    }
  }
  Juiz.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Juiz',
    tableName: 'Juiz'
  });
  return Juiz;
};