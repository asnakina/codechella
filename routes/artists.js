const express = require('express');
const { Artist } = require('../models');

const artistsRouter = express.Router();



artistsRouter.get('/', async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists)
  }catch(e) {
    res.status(500).json({msg: e.message});
  }
});

artistsRouter.get('/:id', async (req, res) => {
  try {
    const artists = await Artist.findByPk();
    res.json(artists)
  }catch(e) {
    res.status(500).json({msg: e.message});
  }
});

module.exports= {
 artistsRouter
}
