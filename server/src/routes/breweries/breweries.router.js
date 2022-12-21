const express = require('express');

const {httpGetAllBreweries} = require('./breweries.controller')

const breweriesRouter = express.Router();

breweriesRouter.use('/', httpGetAllBreweries)

module.exports = breweriesRouter;