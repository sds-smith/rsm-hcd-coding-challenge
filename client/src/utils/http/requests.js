import axios from 'axios';

const API_BASE_URL='http://localhost:8000/v1';

export async function httpGetMyLocalBreweries(clientLatLong) {
        try {
            const response = await axios.get(`${API_BASE_URL}/breweries/by-dist?latLong=${clientLatLong}`)
            return await response.data
        } catch (err) {
            return err
        }
  };

export async function httpgetDefaultBreweries() {
    try {
        const response = await axios.get(`${API_BASE_URL}/breweries/default_city`)
        return await response.data
    } catch (err) {
        return err
    }
};

export async function httpGetBreweryLatLong(postal_code) {
    try {
        const response = await axios.get(`${API_BASE_URL}/breweries/get_geocode?postal_code=${postal_code}`)
        return response.data
    } catch(err) {
        return err
    }
}
