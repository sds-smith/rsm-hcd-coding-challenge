import React, { useState, useEffect, useContext } from "react";

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
                   const breweries = await httpGetMyLocalBreweries(clientLatLong);
                   setBreweriesNearMe(breweries)
                   setBreweriesError('')
                } catch (err) {
                  setBreweriesError(err.message)
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