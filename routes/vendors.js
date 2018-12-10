const express = require('express');
const vendorRouter = express.Router();
const { Vendor }  = require('../models');

vendorRouter.get('/', async (req, res) => {
  try{
    const vendors = await Vendor.findAll();
    res.json({ data: vendors })
  } catch(e) {
    console.log(e);
    res.status(500).json({message: `The rout is not connecting`})
  }
});

module.exports = {
  vendorRouter
}
