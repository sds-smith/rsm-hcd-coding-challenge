const axios = require('axios');

const breweries = require('./breweries.mongo');

const OPEN_BREWERY_DB_BASE_URL = 'https://api.openbrewerydb.org/breweries';
const DEFAULT_CITY='asheville';

//Mongo Functions
async function loadBreweriesData() {
    const checkBrewery = await findBrewery({
        id: "archetype-brewing-asheville"
    });
    if (checkBrewery) {
        console.log('Brewery data already loaded!');
    } else {
        populateBreweriesData();
    };
};

async function findBrewery(filter) {
    return await breweries.findOne(filter)
};

async function saveBrewery(brewery) {
    await breweries.findOneAndUpdate({
        id: brewery.id
    },
    brewery,
    {
        upsert: true
    });
};

async function populateBreweriesData() {
    console.log('Downloading breweries data...');
    const response = await axios.get(`${OPEN_BREWERY_DB_BASE_URL}?by_city=${DEFAULT_CITY}`, { 
        headers: { 
            "Accept-Encoding": "gzip,deflate,compress"
        }, 
    });
    const breweryDocs = response.data;
    for (const breweryDoc of breweryDocs) {
        const {id, name, brewery_type, street, city, state, postal_code, website_url, longitude, latitude} = breweryDoc;
        const brewery = {
            id,
            name,
            brewery_type,
            street,
            city,
            state,
            postal_code,
            website_url,
            longitude,
            latitude
        }
        await saveBrewery(brewery)
    };
};

async function getDefaultBreweries() {
    return await breweries
    .find({}, {
        '_id': 0,
        '__v': 0
    })
};

async function getBreweriesNearMe(latLong) {
    try {
        const response = await axios.get(`${OPEN_BREWERY_DB_BASE_URL}?by_dist=${latLong}`, { 
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
    loadBreweriesData,
    getDefaultBreweries,
    getBreweriesNearMe
}