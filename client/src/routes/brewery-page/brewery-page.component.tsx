import { useNavigate } from 'react-router-dom';
import BreweryCard from '../../components/brewery-card/brewery-card.component';

import './brewery-page.styles.scss';

const BreweryPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    };

    return (
        <div>
            <div className='backButton' onClick={goBack}>{'<-- Back'}</div>
            <BreweryCard />
        </div>

    )
};

export default BreweryPage;