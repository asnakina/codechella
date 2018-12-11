const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('.models');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwt = require('jsonwebtoken');
const SECRET = "coachella sucks";
const sign = (payload) => jwt.sign(payload, SECRET);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

passport.use(new JwtStrategy(opts, async(payload, done) => {
  try {
    const user = await User.findByPk(payload.id);
    return done(null, user);
  } catch(e) {
    return done(e, false);
  }
}));

module.exports = {
  passport,
  sign
};
