const {
    getDefaultBreweries,
    getGeoCode,
    getBreweriesNearMe
} = require('../../models/breweries/breweries.model');

async function httpGetDefaultBreweries(req, res) {
    return res.status(200).json(await getDefaultBreweries())
};

async function httpGetBreweriesNearMe(req, res) {
    const {latLong} = req.query
    return res.status(200).json(await getBreweriesNearMe(latLong))
};

async function httpGetGeoCode(req, res) {
    const {postal_code} = req.query
    return res.status(200).json(await getGeoCode(postal_code))
}

module.exports = {
    httpGetDefaultBreweries,
    httpGetGeoCode,
    httpGetBreweriesNearMe
};