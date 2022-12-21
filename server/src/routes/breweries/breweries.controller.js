const {getAllBreweries} = require('../../models/breweries/breweries.model');

async function httpGetAllBreweries(req, res) {
    return res.status(200).json(await getAllBreweries());
};

module.exports = {
    httpGetAllBreweries
};