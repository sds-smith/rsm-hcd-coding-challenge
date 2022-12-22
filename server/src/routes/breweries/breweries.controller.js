const {
    getAllBreweries,
    getAshevilleBreweries,
    getBreweriesNearMe
} = require('../../models/breweries/breweries.model');

async function httpGetAllBreweries(req, res) {
    return res.status(200).json(await getAllBreweries());
};

async function httpGetAshevilleBreweries(req, res) {
    return res.status(200).json(await getAshevilleBreweries())
};

async function httpGetBreweriesNearMe(req, res) {
    const {latLong} = req.query
    return res.status(200).json(await getBreweriesNearMe(latLong))
};

module.exports = {
    httpGetAllBreweries,
    httpGetAshevilleBreweries,
    httpGetBreweriesNearMe
};