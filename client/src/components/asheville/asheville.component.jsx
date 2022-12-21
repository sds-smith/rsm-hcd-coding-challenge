import { useState, useEffect } from "react";
import axios from "axios";

import BreweryCard from "../brewery-card/brewery-card.component";
import CityTable from "../city-table/city-table.component";

const Asheville = () => {
    const [ashevilleBreweries, setAshevilleBreweries] = useState([]);

    useEffect(() => {
        const getAshevilleBreweries = async () => {
            const breweries = await axios.get('http://localhost:8000/v1/breweries/asheville')
            setAshevilleBreweries(breweries.data)
        };
        getAshevilleBreweries()
    }, []);

    return (
        <CityTable city='Asheville' breweries={ashevilleBreweries} />
    )
}

export default Asheville