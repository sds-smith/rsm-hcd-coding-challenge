import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header/header.component";

import './navigation.styles.scss'

const Navigation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home')
    }, [])
    
    return (
        <div className='navigationContainer'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Navigation