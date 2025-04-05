const mongoose = require('mongoose');
// Schemat użytkownika (Model)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
module.exports = mongoose.model('User', userSchema, 'Users') 
  