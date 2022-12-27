import {useState, useEffect, useContext, FC} from 'react';

import TableRow from '../table-row/table-row.component';

import { BreweryContext } from '../../context/brewery.context';
import { BreweryArray } from '../../utils/types.utils';

import './city-table.styles.scss';

type CityTableProps = {
    breweriesToRender: BreweryArray
}

const CityTable: FC<CityTableProps> = ({breweriesToRender}) => {
    const [city, setCity] = useState('');
    
    const {hasBreweries, loadText} = useContext(BreweryContext);

    useEffect(() => {
            breweriesToRender[0] && setCity(breweriesToRender[0].city)
    }, [breweriesToRender]);

    return (
        <>
            { hasBreweries(breweriesToRender) ? (
                <div>    
                    <h2>{`Breweries near ${city}`}</h2>
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
                            breweriesToRender.map((brewery)=> {
                                if (brewery !== null) {
                                    return <TableRow key={brewery.id} brewery={brewery} />
                                }
                            })
                        }
                        </tbody>
                    </table>
                </div>
            ) : (
                <h2>{loadText}</h2>
            )}
        </>
    );
};

export default CityTable;