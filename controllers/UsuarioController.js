const JWT = require('jsonwebtoken');
const JWT_SECRET = require('../config/auth.json');

signToken = user => {
    return JWT.sign({
      iss: 'naja',
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET.JWT_SECRET);
  }

module.exports = {
      async googleOAuth(req, res, next) {
        const token = signToken(req.user);
        res.status(200).json({ token });
    }
}