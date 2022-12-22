
import { Link, useNavigate } from "react-router-dom";

import BeerIcon from '../../assets/Beer-icon.png';
import useTrackLocation from "../../hooks/use-track-location";

import './header.styles.scss'

const Header = () => {
    const {handleTrackLocation} = useTrackLocation();
    const navigate = useNavigate();

    const onClick = () => {
        handleTrackLocation()
        navigate('/breweries-near-me')
    }

    return (
        <div className='headerContainer'>
            <div className='linkContainer'>
                <Link className='link' to={'/'}>
                    <img src={BeerIcon}/>
                    <p>HOME</p>
                </Link>
            </div>
            <h1>Discover Breweries</h1>
            <button onClick={onClick} >Find Breweries Near Me</button>
        </div>
    )
}

export default Header;