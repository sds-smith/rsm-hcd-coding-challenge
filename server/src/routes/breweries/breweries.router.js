const express = require('express');

const {
    httpGetDefaultBreweries,
    httpGetGeoCode,
    httpGetBreweriesNearMe
} = require('./breweries.controller')

const breweriesRouter = express.Router();

breweriesRouter.use('/asheville', httpGetDefaultBreweries);
breweriesRouter.use('/get_geocode', httpGetGeoCode)
breweriesRouter.use('/by-dist?*', httpGetBreweriesNearMe)

module.exports = breweriesRouter;