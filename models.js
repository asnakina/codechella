const { Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs');
const SALT = 10;

const sequelize = new Sequelize({
  database: 'codechella_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  hooks: {
    beforeCreate: async (user, options) => {
      user.password = await bcrypt.hash(user.password, SALT);
    }
  }
});

const Artist = sequelize.define('artist', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  img_url: Sequelize.STRING,
  created_by: Sequelize.INTEGER

});

const Vendor = sequelize.define('vendor', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  img_url: Sequelize.STRING,
  created_by: Sequelize.INTEGER
});

const Area = sequelize.define('area', {
  name: Sequelize.STRING,
  img_url: Sequelize.STRING
});

Artist.belongsTo(Area);
Area.hasMany(Artist);
Vendor.belongsTo(Area);
Area.hasMany(Vendor);
User.belongsToMany(Artist, { through: 'user_artists' });
Artist.belongsToMany(User, { through: 'user_artists' });
User.belongsToMany(Vendor, { through: 'user_vendors' });
Vendor.belongsToMany(User, { through: 'user_vendors' });

module.exports = {
  sequelize,
  Area,
  Vendor,
  Artist,
  User
}
