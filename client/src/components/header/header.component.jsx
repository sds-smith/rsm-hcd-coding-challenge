
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/home'}>HOME</Link>
            <h1>Discover Breweries</h1>
        </div>
    )
}

export default Header;