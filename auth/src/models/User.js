const mongoose = require('mongoose');

const User = mongoose.model('Usuario', {
  primeiro_nome: {type: String, required: true},
  ultimo_nome: {type: String, required: true},
  email: {type: String, required: true},
  senha: {type: String, required: true},
  is_admin: {type: Boolean, required: true},
  createdAt: {type: Date, required: false},
  updatedAt: {type: Date, required: false}
})

module.exports = User