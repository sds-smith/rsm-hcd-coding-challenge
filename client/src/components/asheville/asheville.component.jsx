import { useEffect, useContext } from "react";
import axios from "axios";

import CityTable from "../city-table/city-table.component";
import { BreweryContext } from "../../context/brewery.context";

const Asheville = () => {
    const {ashevilleBreweries, setAshevilleBreweries, hasBreweries} = useContext(BreweryContext);

    useEffect(() => {
        const getAshevilleBreweries = async () => {
            const breweries = await axios.get('http://localhost:8000/v1/breweries/asheville')
            setAshevilleBreweries(breweries.data)
        };
        if (!hasBreweries(ashevilleBreweries)) {
            getAshevilleBreweries()
        }
    }, [ashevilleBreweries]);

    return (
        <CityTable city='Asheville' breweries={ashevilleBreweries} />
    )
}

export default Asheville