const models = require('../models');
const Atleta = models.Atleta;

module.exports = {
  async create(request, response) {
    try {
      const dados_atleta = { ...request.body }
      const atleta = await Atleta.create(dados_atleta);
      return response.status(201).json(atleta);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.id;
      const atleta = await Atleta.findOne(
        {
          where: { id }
        }
      );
      if (!atleta) {
        return response.status(404).json("Atleta não encontrado");
      }
      response.status(200).json(atleta);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request, response) {
    try {
      const id = request.params.id;
      const atleta = await Atleta.destroy({ where: { id } });
      if (!atleta) {
        return response.status(404).json("Atleta não encontrado");
      }
      response.status(202).json("Atleta deletado");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getAll(request, response) {
    try {
      const atletas = await Atleta.findAll();
      response.status(200).json(atletas);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getByCategory(request, response) {
    try {
      const atletas = await Atleta.findAll({
        where: { 'categoria': request.params.categoria }
      });
      response.status(200).json(atletas);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
