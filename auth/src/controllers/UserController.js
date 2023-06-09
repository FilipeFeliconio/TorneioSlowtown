const UserService = require("../services/UserService");
const utils = require("../utils/utils");
const User = require("../models/User");
const {ObjectId} = require("mongodb");

module.exports ={
  async createUser(req, res){
    const user = await User(req.body);
    user.senha = await utils.encryptPwd(req.body.senha);
    user.createdAt = new Date();
    user.updatedAt = new Date();

    const email_exist = await UserService.getByEmail(user.email);
    if(!email_exist){
      UserService.create(user, (err, result) => {
        if (err) {
          res.status(400).send(err);
        } else {
          user.password = "*******";
          res.status(201).json(user);
        }
      });
    }
    else
    {
      res.status(409).json("Cadastro não foi realizado pois e-mail já está em uso.");
    }
  },
  async getUser(req, res){
    const id = req.params.user_id;
    try{
      const validade_id = ObjectId.isValid(id);
      if(!validade_id){
        res.status(400).send("ID inválido");
      }
      const user = await UserService.getUserById(id);
      if(user){
        user.password = "*******";
        res.status(200).send(user);
      }else{
        res.status(404).send("Usuário não encontrado");
      }
    }
    catch(error){
      console.error(error);
      res.status(500).send(error);
    }
  },
  async getAllUsers(req, res){
    const user = await UserService.getUserById(req.user_id);
    console.log(user)
    if(user){
      if(user.is_admin){
        const users = await UserService.getAll();
        res.status(200).send(users);
      }
      else{
        user.password = "*******";
        res.status(200).send(user);
      }
    }else{
      res.status(404).send("Usuário não encontrado");
    }
  },
  async updateUser(req, res) {
    try {
      const id = req.params.user_id;
      const validade_id = ObjectId.isValid(id);
      if(!validade_id){
        res.status(400).send("ID inválido");
      }
      else{
        const user = await UserService.getUserById(id);
        console.log(user)
        if(user){
          const userUpdate = await User(req.body);
          await UserService.updateUserById(userUpdate, id);

          res.status(200).json("Usuário atualizado com sucesso");
        }else{
          res.status(404).send("Usuário não encontrado");
        }
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async removeUser(request,response){
    try {
      const id = request.params.user_id;
      const validate_id = ObjectId.isValid(id);
      if(!validate_id){
        response.status(400).json("ID inválido");
      }
      else{
        const id_current_user = request.user_id;
        const current_user = await UserService.getUserById(id_current_user);
        if(current_user.is_admin){
          const user_deleted = await UserService.deleteUserById(id);

          if(user_deleted.deletedCount){
            response.status(204).json("Usuário excluído com sucesso");
          }
          else{
            return response.status(404).json("Usuário não encontrado");
          }
        }
        else{
          return response.status(401).json("Usuário atual não é admin, portanto não tem permissão para excluir");
        }
      }
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}