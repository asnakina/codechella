const express = require('express');
const { User, Artist, Vendor } = require('../models');

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users)
  } catch (e) {
      console.log(e);
      res.status(500).json({message: `The route is not connecting`})
    }
  }
);

usersRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne();
    res.json(user)
  } catch (e) {
      console.log(e);
      res.status(500).json({message: `The route is not connecting`})
    }
  }
);

usersRouter.post('/', async (req, res) => {
  try {
    const postuser = await User.create(req.body);
    res.json(postuser)
  } catch (e){
      console.log(e);
      res.status(500).json({message: `The route is not connecting`})
    }
  }
);

usersRouter.put('/:id', async (req, res) => {
  try {
    const updatedUsers = await User.findByPk(req.params.id)
    await updatedUsers.update(req.body)
    res.json(updatedUsers);
  } catch(e) {
    res.json({message: e.message})
  }
});

usersRouter.delete('/:id', async (req, res) => {
  try {
    const users = await User.destroy({
      where: { id: req.params.id }
    });
    res.json({message: `User with id ${req.params.id} deleted`})
  } catch(e) {
    res.json({message: e.message})
  }
});

usersRouter.get('/:id/artists', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: {
        model: Artist
      }
    });
    res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
})

usersRouter.post('/:user/artists/:artist', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.user },
      include: {
        model: Artist
      }
    });
    const artist = await Artist.findOne({
      where: { id: req.params.artist }
    });
    user.addArtist(artist);
    res.json(user);
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

usersRouter.delete('/:user/artists/:artist', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.user },
      include: {
        model: Artist
      }
    });
    const artist = await Artist.findOne({
      where: { id: req.params.artist }
    });
    user.removeArtist(artist);
    res.json(user);
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

usersRouter.get('/:id/vendors', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: {
        model: Vendor
      }
    });
    res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
})

usersRouter.post('/:user/vendors/:vendor', async(req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.user },
      include: {
        model: Vendor
      }
    });
    const vendor = await Vendor.findOne({
      where: { id: req.params.vendor }
    });
    user.addVendor(vendor);
    res.json(user);
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

usersRouter.delete('/:user/vendors/:vendor', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.user },
      include: {
        model: Vendor
      }
    });
    const vendor= await Vendor.findOne({
      where: { id: req.params.vendor }
    });
    user.removeVendor(vendor);
    res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
})

// AUTH
// TODO: set up passport
// TODO: set up encryption
// TODO: test passwords
// TODO test login

// POST-AUTH
// TODO: create multiple users
// TODO: integrate front end with favorites
module.exports = {
  usersRouter
}
