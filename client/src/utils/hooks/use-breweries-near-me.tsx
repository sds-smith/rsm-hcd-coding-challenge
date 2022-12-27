import { useState, useContext } from "react";

import { httpGetMyLocalBreweries } from "../http/requests";
import { ClientContext } from "../../context/client.context";
import { BreweryContext } from "../../context/brewery.context";


const useBreweriesNearMe = () => {
    const [breweriesError, setBreweriesError] = useState('');

    const {clientLatLong} = useContext(ClientContext);
    const {setBreweriesNearMe} = useContext(BreweryContext);

    const getMyLocalBreweries = async () => {
        if (clientLatLong) {
          try {
             const response = await httpGetMyLocalBreweries(clientLatLong);
             const {message, breweries} = response
             if (message === 'Breweries Retrieved') {
              setBreweriesNearMe(breweries)
              setBreweriesError('')
             } else {
              setBreweriesError(message)
             }
          } catch (err) {
            if (err instanceof Error) {
              setBreweriesError(err.message)
            } else if (typeof err === 'string') {
              setBreweriesError(err)
            } else {
              setBreweriesError(`Error getting breweries ${err}`)
            }
          }
        }
      };

    return {
        getMyLocalBreweries,
        breweriesError
    };
};

export default useBreweriesNearMe;