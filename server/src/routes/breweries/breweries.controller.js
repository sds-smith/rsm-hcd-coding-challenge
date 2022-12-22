const {
    getDefaultBreweries,
    getGeoCode,
    getBreweriesNearMe
} = require('../../models/breweries/breweries.model');

async function httpGetDefaultBreweries(req, res) {
    const response = await getDefaultBreweries()
    return res.status(response.status).json(response)
};

async function httpGetBreweriesNearMe(req, res) {
    const {latLong} = req.query
    const response = await getBreweriesNearMe(latLong)
    return res.status(response.status).json(response)
};

async function httpGetGeoCode(req, res) {
    const {postal_code} = req.query
    const response = await getGeoCode(postal_code)
    return res.status(response.status).json(response)
}

module.exports = {
    httpGetDefaultBreweries,
    httpGetGeoCode,
    httpGetBreweriesNearMe
};