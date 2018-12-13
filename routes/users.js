const express = require('express');
const { User, Artist, Vendor } = require('../models');
const { passport, sign } = require('../auth');
const bcrypt = require('bcryptjs')

const usersRouter = express.Router();


usersRouter.get('/all', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        { model: Artist },
        { model: Vendor }
      ]
    });
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
});

usersRouter.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      include: [
        { model: Artist },
        { model: Vendor }
      ]
    })
    res.json(user);
  } catch (e) {
      console.log(e)
      res.status(500).json({message: `The route is not connecting`})
    }
  }
);

usersRouter.post('/register', async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.some(user => user.username === req.body.username)) {
      throw Error('Username has been taken.');
    }
    else {
      const user = await User.create(req.body);
      const { id, username } = user.dataValues;
      const token = sign({ id, username });
      res.json({token});
    }
  } catch (e){
      console.log(e);
      res.status(500).json({message: e.message})
    }
  }
);

usersRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({where: { username }});
    const passwordValid = await bcrypt.compare(password, user.password);
    const { id } = user;
    if (passwordValid) {
      const token = sign({
        id,
        username
      });
      res.json({ token });
    } else {
      throw Error('Invalid credentials!');
    }
  } catch(e) {
    res.status(401).json({msg: e.message});
  }
});

  usersRouter.post('/login', async (req, res) => {
    try {
      const user = await User.create(req.body);
      const { id, username } = user.dataValues;
      const token = sign({
        id,
        username
      });
      res.json({user, token});
    } catch(e) {
      console.log(e);
      res.status(401).json({msg: e.message});
    }
  });
usersRouter.get('/artists', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      include: {
        model: Artist
      }
    });
    res.json(user.artists);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
})

usersRouter.post('/artists/:artist', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const artist = await Artist.findOne({
      where: { id: req.params.artist }
    });
    await req.user.addArtist(artist);
    const user = await User.findOne({
      where: { id: req.user.id },
      include: {
        model: Artist
      }
    })
    res.json(user.artists);
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

usersRouter.delete('/artists/:artist', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const artist = await Artist.findOne({
      where: { id: req.params.artist }
    });
    await req.user.removeArtist(artist);
    const user = await User.findOne({
      where: { id: req.user.id },
      include: {
        model: Artist
      }
    });
    res.json(user.artists);
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

usersRouter.get('/vendors', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      include: {
        model: Vendor
      }
    });
    res.json(user.vendors);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
})

usersRouter.post('/vendors/:vendor', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const vendor = await Vendor.findOne({
      where: { id: req.params.vendor }
    });
    await req.user.addVendor(vendor);
    const user = await User.findOne({
      where: { id: req.user.id },
      include: {
        model: Vendor
      }
    })
    res.json(user.vendors);
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

usersRouter.delete('/vendors/:vendor', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const vendor = await Vendor.findOne({
      where: { id: req.params.vendor }
    });
    await req.user.removeVendor(vendor);
    const user = await User.findOne({
      where: { id: req.user.id },
      include: {
        model: Vendor
      }
    });
    res.json(user.vendors);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
})


// POST-AUTH
// TODO: integrate front end with favorites
// TODO: add ticket function
module.exports = {
  usersRouter
}
