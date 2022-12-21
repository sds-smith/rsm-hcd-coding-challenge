const {
    getAllBreweries,
    getAshevilleBreweries
} = require('../../models/breweries/breweries.model');

async function httpGetAllBreweries(req, res) {
    return res.status(200).json(await getAllBreweries());
};

async function httpGetAshevilleBreweries(req, res) {
    return res.status(200).json(await getAshevilleBreweries())
}

module.exports = {
    httpGetAllBreweries,
    httpGetAshevilleBreweries
};