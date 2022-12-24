const express = require('express');

const {
    httpgetDefaultBreweries,
    httpGetGeoCode,
    httpGetBreweriesNearMe
} = require('./breweries.controller')

const breweriesRouter = express.Router();

breweriesRouter.use('/default_city', httpgetDefaultBreweries);
breweriesRouter.use('/get_geocode', httpGetGeoCode)
breweriesRouter.use('/by-dist?', httpGetBreweriesNearMe)

module.exports = breweriesRouter;