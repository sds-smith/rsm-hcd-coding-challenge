const express = require('express');

const {
    httpGetDefaultBreweries,
    httpGetBreweriesNearMe
} = require('./breweries.controller')

const breweriesRouter = express.Router();

breweriesRouter.use('/asheville', httpGetDefaultBreweries)
breweriesRouter.use('/by-dist?*', httpGetBreweriesNearMe)

module.exports = breweriesRouter;