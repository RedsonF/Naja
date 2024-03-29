  const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  method: {
    type: String,
    enum: ['google'],
    required: true
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  }
});

module.exports = model('Usuario', UserSchema);