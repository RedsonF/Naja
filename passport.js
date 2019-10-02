const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const Usuario = require('./models/Usuario');

passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: '454802955827-e8rvqb9l2q0ukvifq5k0j4onso3bndca.apps.googleusercontent.com',
    clientSecret: 'leyBC0OJrplQtDIvVgEwK6Ry'
}, async (accessToken, refreshToken, profile, done) => {
    try {
    const usuario = await Usuario.findOne({ "google.id": profile.id });
    if (usuario == null)
        return done('error":"Não autorizado"')

} catch(error) {
    done(error, false, error.message);
  }
}));