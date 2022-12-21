const {getAllBreweries} = require('../../models/breweries/breweries.model');

function httpGetAllBreweries() {
    return getAllBreweries();
};

module.exports = {
    httpGetAllBreweries
};