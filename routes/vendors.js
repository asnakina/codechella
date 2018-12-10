const express = require('express');
const vendorsRouter = express.Router();
const { Vendor }  = require('../models');

vendorsRouter.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json({ data: vendors })
  } catch(e) {
    console.log(e);
    res.status(500).json({message: `The rout is not connecting`})
  }
});

vendorsRouter.get('/:id', async (req, res) => {
  try {
    const vendors = await Vendor.findById({
      where
    })
  }
})

module.exports = {
  vendorRouter
}
