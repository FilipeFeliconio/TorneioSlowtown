const models = require('../../models');
const Atleta = models.Atleta;
const Usuario = models.Usuario;
const AutenticacaoService = require("../../services/auth/AuthenticationService");
const UsuarioService = require("../../services/app/UserService");

module.exports = {
  async create(request, response) {
    try {
      const dados_atleta = { ...request.body }
      
      if ( !( request.body.hasOwnProperty('user_id') || request.body.hasOwnProperty('user') )  ) {
        response.status(400).json("Necessário fornecer dados de usuário do atleta.");
        return;
      }

      if(dados_atleta.user_id){
        const atleta = await Atleta.create(dados_atleta);
        response.status(201).json(atleta);
        return;
      }
      
      const user = dados_atleta.user;
      if ( await UsuarioService.getByEmail(user.email) ){
        response.status(409).send("E-mail informado já possui cadastro vinculado.");
        return;
      } 

      user.senha = await AutenticacaoService.encryptPwd(request.body.user.senha);
      user.is_admin = false;
      const novo_usuario = await Usuario.create(user);
      delete dados_atleta.user;
      dados_atleta.user_id = novo_usuario.id;
      const atleta = await Atleta.create(dados_atleta);
      const atleta_e_usuario = await Atleta.findOne(
        {
          where: { 'id': atleta.id },
          include: { model: Usuario, as: 'user' }
        }
      );
      atleta_e_usuario.user.senha = "*********"
      response.status(201).json(atleta_e_usuario);
      
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.id;
      const atleta = await Atleta.findOne(
        {
          where: { id },
          include: { model: Usuario, as: 'user' }
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
      const atletas = await Atleta.findAll({include: { model: Usuario, as: 'user' }});
      response.status(200).json(atletas);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getByCategory(request, response) {
    try {
      const atletas = await Atleta.findAll({
        where: { 'categoria': request.params.categoria },
        include: { 
          model: Usuario, as: 'user' 
        }
      });
      response.status(200).json(atletas);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
