import {useState, useEffect, useContext} from 'react';

import TableRow from '../table-row/table-row.component';

import { BreweryContext } from '../../context/brewery.context';

import './city-table.styles.css'

const CityTable = (props) => {
    const [city, setCity] = useState('');
    const [breweries, setBreweries] = useState([]);

    const {ashevilleBreweries, breweriesNearMe} = useContext(BreweryContext);

    useEffect(() => {
        if (props.city) {
            setCity(props.city)
            setBreweries(ashevilleBreweries);
        } else {
            setCity(breweriesNearMe[0].city)
            setBreweries(breweriesNearMe)
        }
    })

    return (
        <table>
            <caption>{props.city ? `${city} Breweries` : `Breweries near ${city}`}</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
            { 
                breweries.map(brewery => (
                        <TableRow key={brewery.id} brewery={brewery} />
                    ) 
                )
            }
            </tbody>

        </table>
    )
}

export default CityTable