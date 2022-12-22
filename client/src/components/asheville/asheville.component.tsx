import React, { useEffect, useContext } from "react";

import CityTable from "../city-table/city-table.component";
import { BreweryContext } from "../../context/brewery.context";

import {httpGetDefaultBreweries} from '../../utils/http/requests'

const Asheville = () => {
    const {ashevilleBreweries, setAshevilleBreweries, hasBreweries} = useContext(BreweryContext);

    useEffect(() => {
        const getAshevilleBreweries = async () => {
            const breweries = await httpGetDefaultBreweries();
            setAshevilleBreweries(breweries)
        };
        if (!hasBreweries(ashevilleBreweries)) {
            getAshevilleBreweries()
        }
    }, [ashevilleBreweries]);

    return (
        <CityTable city='Asheville'/>
    )
}

export default Asheville