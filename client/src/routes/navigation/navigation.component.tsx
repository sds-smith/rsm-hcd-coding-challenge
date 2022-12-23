import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";

import './navigation.styles.scss'

const Navigation = () => {
    
    return (
        <div className='navigationContainer'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Navigation