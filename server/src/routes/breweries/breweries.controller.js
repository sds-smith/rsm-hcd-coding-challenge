const {
    getDefaultBreweries,
    getBreweriesNearMe
} = require('../../models/breweries/breweries.model');

async function httpGetDefaultBreweries(req, res) {
    return res.status(200).json(await getDefaultBreweries())
};

async function httpGetBreweriesNearMe(req, res) {
    const {latLong} = req.query
    return res.status(200).json(await getBreweriesNearMe(latLong))
};

module.exports = {
    httpGetDefaultBreweries,
    httpGetBreweriesNearMe
};