const express = require('express');
const { Area } = require('../models');

const areaRouter = express.Router();

areaRouter.get('/', async (req, res) => {
  try {
    const areas = await Area.findAll();
    res.json(areas);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
});

areaRouter.get('/:id', async (req, res) => {
  try {
    const area = await Area.findOne({
      where: { id: req.params.id }
    });
    res.json(area);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    });
  }
});


module.exports = {
  areaRouter
}
