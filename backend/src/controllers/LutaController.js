const models = require('../models');
const Atleta = models.Atleta;
const Luta = models.Luta;
const { Op } = require("sequelize");

module.exports = {
  async create(request, response) {
    try {
      const keys_request = Object.getOwnPropertyNames(request.body);
      const keys_required = ['data', 'id_atleta_a', 'id_atleta_b', 'juiz_id', 'etapa_id'];
      const check_required = keys_required.every(i => keys_request.includes(i));
      if (check_required ){
        const dados_request= { ...request.body }
        const dados_luta = {
          'data': dados_request.data,
          'atleta_a': dados_request.id_atleta_a,
          'atleta_b': dados_request.id_atleta_b,
          'juiz_id': dados_request.juiz_id,
          'etapa_id': dados_request.etapa_id
        }
        const luta = await Luta.create(dados_luta);

        const luta_completa = await Luta.findOne(
          {
            where: { 'id': luta.id },
            include: [
              'participante_atleta_a', 'participante_atleta_b', 'atleta_vencedor', 'juiz', 'etapa'
            ],
            attributes: { exclude: ['atleta_a', 'atleta_b', 'juiz_id', 'etapa_id', 'vencedor'] }
          }
        );
        return response.status(201).json(luta_completa);  
      }
      response.status(400).json("Necessário informar todos atributos para cadastrar. Atributos: data, id_atleta_a, id_atleta_b, juiz_id, etapa_id");  
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.id;
      const luta = await Luta.findOne(
        {
          where: { id },
          include: [
            'participante_atleta_a', 'participante_atleta_b', 'atleta_vencedor', 'juiz', 'etapa'
          ],
          attributes: { exclude: ['atleta_a', 'atleta_b', 'juiz_id', 'etapa_id', 'vencedor'] }
        }
      );
      if (!luta) {
        return response.status(404).json("Luta não encontrada");
      }
      response.status(200).json(luta);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request, response) {
    try {
      const id = request.params.id;
      const luta = await Luta.destroy({ where: { id } });
      if (!luta) {
        return response.status(404).json("Luta não encontrada");
      }
      response.status(202).json("Luta deletada");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getAll(request, response) {
    try {
      const lutas = await Luta.findAll({
        include: [
          'participante_atleta_a', 'participante_atleta_b', 'atleta_vencedor', 'juiz', 'etapa'
        ],
        attributes: { exclude: ['atleta_a', 'atleta_b', 'juiz_id', 'etapa_id', 'vencedor'] }
      });
      response.status(200).json(lutas);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getByEtapa(request, response) {
    try {
      const lutas = await Luta.findAll({
        where: { '$etapa.nome$': { [Op.eq]: request.params.etapa }},
        include: [
          'participante_atleta_a', 'participante_atleta_b', 'atleta_vencedor', 'juiz', 'etapa'
        ],
        attributes: { exclude: ['atleta_a', 'atleta_b', 'juiz_id', 'etapa_id', 'vencedor'] }
      });
      response.status(200).json(lutas);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const nova_data = request.body.data;
      const vencedor_id = request.body.id_atleta_vencedor;
      const id = request.params.id;

      if (!request.body.hasOwnProperty('data') && !request.body.hasOwnProperty('id_atleta_vencedor')){
				return response.status(400).send("Objeto de requisição deve conter atributo data e/ou id_atleta_vencedor para atualização."); 
			}

      const luta = await Luta.findOne({where: {id}});
      if (!luta) {
        return response.status(404).json("Luta não encontrada");
      }

      if(request.body.hasOwnProperty('id_atleta_vencedor')){
        if(vencedor_id != luta.atleta_a && vencedor_id != luta.atleta_b){
          return response.status(409).send("id_atleta_vencedor não corresponde ao id dos atletas participantes da luta."); 
        }
        luta.set({"vencedor": vencedor_id});
      }

      if(nova_data){
        luta.set({"data": nova_data});
      }

      await luta.save();
      const luta_atualizado_completo = await Luta.findOne(
        {
          where: { id },
          include: [
            'participante_atleta_a', 'participante_atleta_b', 'atleta_vencedor', 'juiz', 'etapa'
          ],
          attributes: { exclude: ['atleta_a', 'atleta_b', 'juiz_id', 'etapa_id', 'vencedor'] }
        }
      );
      response.status(200).json(luta_atualizado_completo);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
