const models = require('../models');
const Juiz = models.Juiz;

module.exports = {
  async create(request, response) {
    try {
      const nome = request.body.nome;     
      const juiz = await Juiz.create({"nome": nome});
      response.status(201).json(juiz);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const novo_nome = request.body.nome;
      const id = request.params.id;
      const juiz = await Juiz.findOne({where: {id}});
      if (!juiz) {
        return response.status(404).json("Juiz não encontrado");
      }
      juiz.set({"nome": novo_nome});
      const juiz_atualizado = await juiz.save();
      response.status(200).json(juiz_atualizado);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.id;
      const juiz = await Juiz.findOne({where: {id}});
      if (!juiz) {
        return response.status(404).json("Juiz não encontrado");
      }
      response.status(200).json(juiz);
    } catch (error) {
      console.log(error)
      response.status(400).send(error);
    }
  },
  async getAll(request, response) {
    try {
      const juizes = await Juiz.findAll();
      response.status(200).json(juizes);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request, response) {
    try {
      const id = request.params.id;
      const juiz = await Juiz.destroy({ where: { id } });
      if (!juiz) {
        return response.status(404).json("Juiz não encontrado");
      }
      response.status(202).json("Juiz deletado");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
