const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { collection: 'signup' }); // Explicitly define collection as 'signup'

module.exports = mongoose.model('User', userSchema); // Ensure model name is 'User'