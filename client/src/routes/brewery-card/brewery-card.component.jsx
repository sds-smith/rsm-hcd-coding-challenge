import {useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BreweryMap from '../../components/brewery-map/brewery-map.component';
import { BreweryContext } from '../../context/brewery.context';

import './brewery-card.styles.scss';

const BreweryCard = () => {
    const [brewery, setBrewery] = useState({});
    const [center, setCenter] = useState({});
    const params = useParams();
    const {ashevilleBreweries, breweriesNearMe} = useContext(BreweryContext);
 
    const {name, street, city, state, postal_code} = brewery;

    useEffect(() => {
        const breweryIdToFind = params.breweryId;
        const brewery = ashevilleBreweries.find(breweryToFind => breweryToFind.id === breweryIdToFind) ||
                        breweriesNearMe.find(breweryToFind => breweryToFind.id === breweryIdToFind);
        if (!brewery.latitude || !brewery.longitude) {
            console.log('Getting coords...')
            const getGeoCode = async () => {
                try {
                    const geoResponse = await axios.get(`http://localhost:8000/v1/breweries/get_geocode?postal_code=${brewery.postal_code}`)
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
            <Link to={'/'} >{`<---Back`}</Link>
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