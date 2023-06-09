require('dotenv').config();

const dbo = require('../db/conn');
const {ObjectId} = require("mongodb");
const collName = 'User';

module.exports = {
  async create(matchUser, callbackAtlasResponse) {
    const dbConnect = dbo.getDb();

    await dbConnect
      .collection(collName)
      .insertOne(matchUser, callbackAtlasResponse);
  },

  async getUserById(userId){
    const dbConnect = dbo.getDb();

    return await dbConnect
      .collection(collName)
      .findOne(
        {
          _id: ObjectId(userId)
        }
      );
  },

  async updateUserById(user, userId){
    const dbConnect = dbo.getDb();
    return await dbConnect
      .collection(collName)
      .updateOne(
        {
          _id: ObjectId(userId)
        },
        {
          $set: {
            primeiro_nome: user.primeiro_nome,
            ultimo_nome: user.ultimo_nome,
            updatedAt: new Date()
          }
        },
      );
  }, 

  async deleteUserById(userId){
    const dbConnect = dbo.getDb();
    
    return await dbConnect
      .collection(collName)
      .deleteOne(
        {
          _id: ObjectId(userId)
        }
      );
  },

  async getByEmail(email){
    const dbConnect = dbo.getDb();

    return await dbConnect
      .collection(collName)
      .findOne(
          {
            email: email
          }
      );
  },

  async getAll(){
    const dbConnect = dbo.getDb();

    return await dbConnect
      .collection(collName)
      .find()
      .toArray();
  },
}