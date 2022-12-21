const express = require('express');

const {
    httpGetAllBreweries,
    httpGetAshevilleBreweries
} = require('./breweries.controller')

const breweriesRouter = express.Router();

breweriesRouter.use('/asheville', httpGetAshevilleBreweries)
breweriesRouter.use('/', httpGetAllBreweries)

module.exports = breweriesRouter;