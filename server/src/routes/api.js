const express = require('express');
const breweriesRouter = require('./breweries/breweries.router')

const api = express.Router();

api.use('/breweries', breweriesRouter)

module.exports = api;