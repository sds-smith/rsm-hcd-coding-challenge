import { useState, useEffect, useContext } from "react";

import CityTable from "../../components/city-table/city-table.component";

import useBreweriesNearMe from "../../utils/hooks/use-breweries-near-me";

import { BreweryContext } from "../../context/brewery.context";
import { ClientContext } from "../../context/client.context";
import { BreweryArray } from "../../utils/types.utils";

const BreweriesNearMe = () => {

    const {hasBreweries, breweriesNearMe} = useContext(BreweryContext);
    const  {locationErrorMsg} = useContext(ClientContext);

    const {getMyLocalBreweries} = useBreweriesNearMe();

    useEffect(() => {
        if (!hasBreweries(breweriesNearMe)) {
            getMyLocalBreweries();
        };
    })

    return (
        <div>
            { locationErrorMsg ? 
                <div>{`${locationErrorMsg}. Please return to home page.`}</div>
                : 
                <CityTable breweriesToRender={breweriesNearMe} />
            }
        </div>
    )
};

export default BreweriesNearMe;