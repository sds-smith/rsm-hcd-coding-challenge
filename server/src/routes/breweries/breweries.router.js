const express = require('express');

const {
    httpGetAllBreweries,
    httpGetAshevilleBreweries,
    httpGetBreweriesNearMe
} = require('./breweries.controller')

const breweriesRouter = express.Router();

breweriesRouter.use('/asheville', httpGetAshevilleBreweries)
breweriesRouter.use('/by-distance?*', httpGetBreweriesNearMe)
breweriesRouter.use('/', httpGetAllBreweries)

module.exports = breweriesRouter;