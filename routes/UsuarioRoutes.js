const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');
const passport = require('passport');
const passportConf = require('../passport');
const passportGoogle = passport.authenticate('googleToken', { session: false });

router.route('/oauth/google')
  .post(passportGoogle, usuarioController.googleOAuth);

module.exports = router;