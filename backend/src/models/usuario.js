'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Atleta}) {
      // define association here
      this.hasOne(Atleta, {foreignKey: 'user_id', as: 'atleta', onUpdate: 'cascade', onDelete: 'cascade'})
    }
  }
  Usuario.init({
    primeiro_nome: DataTypes.STRING,
    ultimo_nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};