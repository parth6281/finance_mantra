const mongoose = require('mongoose')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  salt: String,
  hash: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    default: undefined
  },
})

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
};

userSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000, 10),
  }, JWT_SECRET);
};


userSchema.statics.IfUserAlreadyRegistered = async function (email) {
  try {
    const user = await this.findOne({
      email,
    })

    if (user) {
      return true
    }
    return false
  } catch (error) {
    console.error('Error: ', error);
    return true
  }
}

const User = mongoose.model('User', userSchema);