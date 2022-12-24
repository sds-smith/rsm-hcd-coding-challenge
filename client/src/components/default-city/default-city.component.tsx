import { useEffect, useContext } from "react";

import CityTable from "../city-table/city-table.component";
import { BreweryContext } from "../../context/brewery.context";

import {httpgetDefaultBreweries} from '../../utils/http/requests'

const DefaultCity = () => {
    const {defaultBreweries, setDefaultBreweries, hasBreweries} = useContext(BreweryContext);

    useEffect(() => {
        const getDefaultBreweries = async () => {
            try {
                const breweries = await httpgetDefaultBreweries();
                setDefaultBreweries(breweries)
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err.message)
                  } else if (typeof err === 'string') {
                    console.log(err)
                  } else {
                    console.log(`Error getting breweries ${err}`)
                  }
            }
        };
        if (!hasBreweries(defaultBreweries)) {
            getDefaultBreweries()
        }
    }, [defaultBreweries]);

    return (
        <CityTable city='Asheville'/>
    )
}

export default DefaultCity