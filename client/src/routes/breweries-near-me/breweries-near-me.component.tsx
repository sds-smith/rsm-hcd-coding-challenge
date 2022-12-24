import { useState, useEffect, useContext } from "react";

import CityTable from "../../components/city-table/city-table.component";

import { BreweryContext } from "../../context/brewery.context";
import { ClientContext } from "../../context/client.context";
import { httpGetMyLocalBreweries } from "../../utils/http/requests";

const BreweriesNearMe = () => {
    const [breweriesError, setBreweriesError] = useState('');

    const {hasBreweries, breweriesNearMe,setBreweriesNearMe} = useContext(BreweryContext);
    const {clientLatLong} = useContext(ClientContext);

    useEffect(() => {
        if (!hasBreweries(breweriesNearMe)) {
            const getMyLocalBreweries = async () => {
              if (clientLatLong) {
                try {
                   const response = await httpGetMyLocalBreweries(clientLatLong);
                   const {breweries, message} = response.data
                   if (breweries) {
                    setBreweriesNearMe(breweries)
                    setBreweriesError('')
                   } else {
                    setBreweriesError(message)
                   }
                   console.log(message)
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
            }
            getMyLocalBreweries()
        } 
    }, [clientLatLong])

    return (
        <div>
            { breweriesError ? 
                <div>{`${breweriesError}. Please return to home page.`}</div>
                : 
                hasBreweries(breweriesNearMe) ? 
                    <CityTable /> :
                    <div>Loading...</div>
            }
        </div>
    )
};

export default BreweriesNearMe;