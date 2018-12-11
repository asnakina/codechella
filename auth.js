const bcrypt = require('bcryptjs');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').JWTStrategy;
const ExtractJWT = require('passport-jwt').ExtractJWT;
const { User } = require('./models');

const jwt = require('jsonwebtoken');
const SECRET = 'coachella sucks';
const sign = (payload) => jwt.sign(payload, SECRET);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken();
  secretOrKey: SECRET
}

passport.use(new JWTStrategy(opts, async (payload, done) => {
  try {
    const user = await User.findOne({where: { id: { req.params.id }}});
    return done(null,user);
  } catch (e) {
    return done(e, false);
  }
}))

module.exports = {
  passport,
  sign
}
