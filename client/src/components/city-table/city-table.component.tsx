import {useState, useEffect, useContext, FC} from 'react';

import TableRow from '../table-row/table-row.component';

import { BreweryContext } from '../../context/brewery.context';
import { BreweryArray, defaultBreweryState } from '../../utils/types.utils';

import './city-table.styles.scss';

type CityTableProps = {
    city?: string
}

const CityTable: FC<CityTableProps> = (props) => {
    const [city, setCity] = useState('');
    const [breweries, setBreweries] = useState<BreweryArray>([defaultBreweryState]);

    const {defaultBreweries, breweriesNearMe} = useContext(BreweryContext);

    useEffect(() => {
        if (props.city) {
            setCity(props.city)
            setBreweries(defaultBreweries);
        } else {
            breweriesNearMe[0] && setCity(breweriesNearMe[0].city)
            setBreweries(breweriesNearMe)
        }
    })

    return (
        <div>
            <h2>{props.city ? `${city} Breweries` : `Breweries near ${city}`}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name (click a brewery name to view more)</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Website (click to visit)</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    breweries.map((brewery)=> {
                        if (brewery !== null) {
                            return <TableRow key={brewery.id} brewery={brewery} />
                        }
                    })
                }
                </tbody>

            </table>
        </div>

    )
}

export default CityTable