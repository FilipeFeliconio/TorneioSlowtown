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
      this.belongsTo(Usuario, {foreignKey: 'user_id', as: 'user'});

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
    cpf: DataTypes.STRING,
    peso: DataTypes.DECIMAL,
    patrocinador: DataTypes.STRING,
    categoria: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Atleta',
  });

  return Atleta;
};