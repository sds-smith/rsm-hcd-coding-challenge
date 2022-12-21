const axios = require('axios');

const OPEN_BREWERT_DB_BASE_URL = 'https://api.openbrewerydb.org/breweries'

async function getAllBreweries() {
    try {
        const response = await axios.get(`${OPEN_BREWERT_DB_BASE_URL}`, { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        });
        return await response.data;
    } catch(err) {
        return err
    }
}

module.exports = {
    getAllBreweries
}