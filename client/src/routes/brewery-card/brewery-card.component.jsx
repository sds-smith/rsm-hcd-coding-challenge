import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import BreweryMap from '../../components/brewery-map/brewery-map.component';
import { BreweryContext } from '../../context/brewery.context';

import './brewery-card.styles.scss';

const BreweryCard = () => {
    const params = useParams();
    const breweryIdToFind = params.breweryId;
    const {ashevilleBreweries} = useContext(BreweryContext);

    const brewery = ashevilleBreweries.find(breweryToFind => breweryToFind.id === breweryIdToFind)
    const {name, street, city, state, postal_code, latitude, longitude} = brewery;

    return (
        <div className='breweryCardContainer' >
            <Link to={'/'} >{`<---Back`}</Link>
            <h2>{name}</h2>
            <p>{street}</p>
            <p>{`${city}, ${state} ${postal_code}`}</p>
            <div className='breweryMapWrapper'>
                <BreweryMap lat={Number(latitude)} lng={Number(longitude)} name={name} />
            </div>
        </div>
    )
}

export default BreweryCard