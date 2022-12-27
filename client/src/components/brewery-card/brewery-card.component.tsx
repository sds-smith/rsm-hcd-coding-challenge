import { useState, useEffect } from 'react';
import BreweryMap from '../brewery-map/brewery-map.component';
import useBreweriesNearMe from '../../utils/hooks/use-breweries-near-me';

import { BreweryType, CenterType, defaultBreweryState, defaultCenter, GetBreweryResponseType } from '../../utils/types.utils';

import './brewery-card.styles.scss';


const BreweryCard = () => {
    const [brewery, setBrewery] = useState<BreweryType>(defaultBreweryState);
    const [center, setCenter] = useState<CenterType>(defaultCenter);
 
    const {name, street, city, state, postal_code} = brewery;

    const {getBrewery} = useBreweriesNearMe();

    useEffect(() => {
        const {brewery, center} = getBrewery() as GetBreweryResponseType;

        brewery && setBrewery(brewery);
        center && setCenter(center);
    }, [])

    return (
        <div className='breweryCardContainer' >
            <div className='breweryInfo'>
                <h2>{name}</h2>
                <p>{street}</p>
                <p>{`${city}, ${state} ${postal_code}`}</p>
            </div>
                {
                    center.lat ? <BreweryMap center={center} name={name} zoom={15} />
                                : <div>Loading Map...</div>
                }
        </div>
    )
}

export default BreweryCard