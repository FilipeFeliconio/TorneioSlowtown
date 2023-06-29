const models = require('../../models');

module.exports = {
  async getByEmail(email) {
    const usuario = await models.Usuario.findOne({ where: {'email': email }, include: { model: models.Atleta, as: 'atleta' } });
    return usuario;
  }
}