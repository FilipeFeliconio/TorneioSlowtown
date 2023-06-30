const models = require('../models');
const Etapa = models.Etapa;

module.exports = {
  async create(request, response) {
    try {
      const nome = request.body.nome;     
      const etapa = await Etapa.create({"nome": nome});
      response.status(201).json(etapa);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const novo_nome = request.body.nome;
      const id = request.params.id;
      const etapa = await Etapa.findOne({where: {id}});
      if (!etapa) {
        return response.status(404).json("Etapa não encontrada");
      }
      etapa.set({"nome": novo_nome});
      const etapa_atualizado = await etapa.save();
      response.status(200).json(etapa_atualizado);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.id;
      const etapa = await Etapa.findOne({where: {id}});
      if (!etapa) {
        return response.status(404).json("Etapa não encontrada");
      }
      response.status(200).json(etapa);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getAll(request, response) {
    try {
      const etapas = await Etapa.findAll();
      response.status(200).json(etapas);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request, response) {
    try {
      const id = request.params.id;
      const etapa = await Etapa.destroy({ where: { id } });
      if (!etapa) {
        return response.status(404).json("Etapa não encontrada");
      }
      response.status(202).json("Etapa deletada");
    } catch (error) {
      console.log(error)
      response.status(400).send(error);
    }
  }
};
