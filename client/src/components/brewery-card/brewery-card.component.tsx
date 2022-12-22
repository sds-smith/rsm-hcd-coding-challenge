import React, {useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import BreweryMap from '../brewery-map/brewery-map.component';
import { BreweryContext } from '../../context/brewery.context';
import {httpGetBreweryLatLong} from '../../utils/http/requests';

import { BreweryType } from '../city-table/city-table.component';

import './brewery-card.styles.scss';

const defaultBrewery = {
    id: '',
    name: '',
    brewery_type: '',
    street: '',
    city: '',
    state: '',
    postal_code: '',
    website_url: '',
    longitude: 0,
    latitude: 0,
}

export type Center = {
    lat: number,
    lng: number
}

const defaultCenter = {
    lat: 0,
    lng: 0
}

const BreweryCard = () => {
    const [brewery, setBrewery] = useState<BreweryType>(defaultBrewery);
    const [center, setCenter] = useState(defaultCenter);
    const params = useParams();
    const {ashevilleBreweries, breweriesNearMe} = useContext(BreweryContext);
 
    const {name, street, city, state, postal_code} = brewery;

    useEffect(() => {
        const breweryIdToFind = params.breweryId;
        const brewery = ashevilleBreweries.find(breweryToFind => breweryToFind.id === breweryIdToFind) ||
                        breweriesNearMe.find(breweryToFind => breweryToFind.id === breweryIdToFind);
        if (!brewery.latitude || !brewery.longitude) {
            const getGeoCode = async () => {
                try {
                    const geoResponse = await httpGetBreweryLatLong(brewery.postal_code)
                    setCenter(geoResponse.data)
                } catch(err) {
                    console.log(err.message)
                }
            };
            getGeoCode();
        } else {
            setCenter({
                lat: Number(brewery.latitude),
                lng: Number(brewery.longitude)
            })
        }
        setBrewery(brewery)
    }, [])

    return (
        <div className='breweryCardContainer' >
            <h2>{name}</h2>
            <p>{street}</p>
            <p>{`${city}, ${state} ${postal_code}`}</p>
            <div className='breweryMapWrapper'>
                {
                    center.lat ? <BreweryMap center={center} name={name} />
                                : <div>Loading Map...</div>
                }

            </div>
        </div>
    )
}

export default BreweryCard