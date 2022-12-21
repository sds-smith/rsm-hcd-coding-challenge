import { useState, useEffect } from "react";
import axios from "axios";

import BreweryCard from "../brewery-card/brewery-card.component";

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
        <div>
            <h1>Asheville Breweries</h1>
            {
                ashevilleBreweries.map(brewery => (
                    <BreweryCard key={brewery.id} brewery={brewery} />
                ))
            }
        </div>
    )
}

export default Asheville