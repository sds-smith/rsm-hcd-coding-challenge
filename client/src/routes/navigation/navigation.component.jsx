import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header/header.component";

const Navigation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home')
    }, [])
    
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Navigation