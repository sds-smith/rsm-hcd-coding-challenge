const axios = require('axios');

const OPEN_BREWERY_DB_BASE_URL = 'https://api.openbrewerydb.org/breweries'

async function getAllBreweries() {
    try {
        const response = await axios.get(`${OPEN_BREWERY_DB_BASE_URL}`, { 
            headers: { 
                "Accept-Encoding": "gzip,deflate,compress"
            }, 
        });
        return await response.data;
    } catch(err) {
        return err
    }
};

async function getAshevilleBreweries() {
    try {
        const response = await axios.get(`${OPEN_BREWERY_DB_BASE_URL}?by_city=asheville`, { 
            headers: { 
                "Accept-Encoding": "gzip,deflate,compress"
            }, 
        });
        return await response.data;
    } catch(err) {
        console.log(err.message)
        return err
    }
};

async function getBreweriesNearMe(latLong) {
    try {
        const response = await axios.get(`${OPEN_BREWERY_DB_BASE_URL}?by_distance=${latLong}`, { 
            headers: { 
                "Accept-Encoding": "gzip,deflate,compress"
            }, 
        });
        return await response.data;
    } catch(err) {
        console.log(err.message)
        return err
    }
}

module.exports = {
    getAllBreweries,
    getAshevilleBreweries,
    getBreweriesNearMe
}