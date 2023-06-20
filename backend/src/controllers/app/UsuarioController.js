const models = require('../../models');
const Usuario = models.Usuario;
const AutenticacaoService = require("../../services/auth/AuthenticationService");
const UsuarioService = require("../../services/app/UserService");

module.exports = {
  async create(request, response) {
    try {
      const user = { ...request.body }
      if ( await UsuarioService.getByEmail(user.email) ){
        return response.status(409).send("E-mail informado já possui cadastro vinculado.");
      } 
      user.senha = await AutenticacaoService.encryptPwd(request.body.senha)
      const usuario = await Usuario.create(user);
      usuario.senha = '******'
      response.status(201).json(usuario);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getUser(request, response) {
    try {
      const id = request.params.id_usuario;
      const usuario = await Usuario.findOne(
        {
          attributes: {
            exclude: ['senha']
          },
          where: {
            id
          }
        }
      );
      if (!usuario) {
        return response.status(404).json("Usuário não encontrado");
      }
      response.status(200).json(usuario);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request, response) {
    try {
      const id = request.params.id_usuario;
      const usuario = await Usuario.destroy({ where: { id } });
      if (!usuario) {
        return response.status(404).json("Usuário não encontrado");
      }
      response.status(202).json("Usuário deletado");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const id = request.params.id_usuario;
      const usuario = await Usuario.findOne({ where: { id } });
      if (!usuario) {
        return response.status(404).json("Usuário não encontrado");
      }

      usuario.set({
        'primeiro_nome': request.body.primeiro_nome,
        'ultimo_nome': request.body.ultimo_nome
      });
      
      const usuario_atualizado = await usuario.save();
      usuario_atualizado.senha = '******';
      response.status(200).json(usuario);
    } catch (error) {
      console.log(error)
      response.status(400).send(error);
    }
  },
};
