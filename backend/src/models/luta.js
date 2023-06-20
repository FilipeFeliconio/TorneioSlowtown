'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Luta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Atleta, Juiz, Etapa}) {
      this.belongsTo(Atleta, {
        foreignKey: 'atleta_a', onUpdate: 'cascade', onDelete: 'cascade', through: 'lutas_participante_a', as: 'participante_atleta_a'
      });

      this.belongsTo(Atleta, {
        foreignKey: 'atleta_b', onUpdate: 'cascade', onDelete: 'cascade', through: 'lutas_participante_b', as: 'participante_atleta_b'
      });

      this.belongsTo(Atleta, {
        foreignKey: 'vencedor', onUpdate: 'cascade', onDelete: 'cascade', through: 'lutas_vencedor', as: 'atleta_vencedor'
      });

      this.belongsTo(Juiz, {
        foreignKey: 'juiz_id', onUpdate: 'cascade', onDelete: 'cascade', through: 'juiz_lutas', as: 'juiz'
      });

      this.belongsTo(Etapa, {
        foreignKey: 'etapa_id', onUpdate: 'cascade', onDelete: 'cascade', through: 'etapa_lutas', as: 'etapa'
      });
    }
  }
  Luta.init({
    data: DataTypes.DATEONLY,
    atleta_a: DataTypes.INTEGER,
    atleta_b: DataTypes.INTEGER,
    juiz_id: DataTypes.INTEGER,
    vencedor: DataTypes.INTEGER,
    etapa_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Luta',
  });
  return Luta;
};