const express = require('express');
const router = express.Router();
const usuarioController = require('./UsuarioController');
const passport = require('passport');
const passportConf = require('../passport');
const passportGoogle = passport.authenticate('googleToken', { session: false });

router.route('/oauth/google')
  .post(passportGoogle, controller.googleOAuth);

module.exports = router;