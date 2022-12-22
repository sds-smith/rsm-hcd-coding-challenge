
import { Link } from 'react-router-dom';
import BreweryCard from '../../components/brewery-card/brewery-card.component';

const BreweryPage = () => {
    return (
        <div>
            <Link to={'/'} >{`<---Back`}</Link>
            <BreweryCard />
        </div>

    )
};

export default BreweryPage;