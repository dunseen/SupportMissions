const authConfig = require('../../config/auth');
const jwt = require('jsonwebtoken');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = { generateToken };