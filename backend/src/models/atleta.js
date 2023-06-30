'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Atleta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Usuario, Luta}) {
      // define association here

      this.hasMany(Luta, {
        foreignKey: 'atleta_a',
      });
      
      this.hasMany(Luta, {
        foreignKey: 'atleta_b',
      });
      
      this.hasMany(Luta, {
        foreignKey: 'vencedor', as: 'vitorias'
      });
    }
  }
  Atleta.init({
    primeiro_nome: DataTypes.STRING,
    ultimo_nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    peso: DataTypes.DECIMAL,
    patrocinador: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Atleta',
  });

  return Atleta;
};