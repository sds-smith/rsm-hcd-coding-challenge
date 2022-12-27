import {useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import BreweryMap from '../brewery-map/brewery-map.component';
import { BreweryContext } from '../../context/brewery.context';
import {httpGetBreweryLatLong} from '../../utils/http/requests';

import { BreweryType, CenterType, defaultBreweryState, defaultCenter } from '../../utils/types.utils';

import './brewery-card.styles.scss';


const BreweryCard = () => {
    const [brewery, setBrewery] = useState<BreweryType>(defaultBreweryState);
    const [center, setCenter] = useState<CenterType>(defaultCenter);
    const params = useParams();
    const {defaultBreweries, breweriesNearMe} = useContext(BreweryContext);
 
    const {name, street, city, state, postal_code} = brewery;

    useEffect(() => {
        const breweryIdToFind = params.breweryId;
        const brewery = defaultBreweries.find(breweryToFind => breweryToFind !== null && breweryToFind.id === breweryIdToFind) ||
                        breweriesNearMe.find(breweryToFind => breweryToFind !== null && breweryToFind.id === breweryIdToFind);
        if (brewery && !brewery.latitude || brewery && !brewery.longitude) {
            const getGeoCode = async () => {
                try {
                    const geoResponse = await httpGetBreweryLatLong(brewery.postal_code)
                    setCenter(geoResponse.data)
                } catch(err) {
                    console.log(err)
                }
            };
            getGeoCode();
        } else {
            if (brewery) {
                setCenter({
                    lat: Number(brewery.latitude),
                    lng: Number(brewery.longitude)
                })
            }

        }
        brewery && setBrewery(brewery)
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