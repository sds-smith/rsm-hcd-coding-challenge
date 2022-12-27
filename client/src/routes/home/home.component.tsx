import { useEffect, useContext } from "react";
import DefaultCity from "../../components/default-city/default-city.component";
import { ClientContext } from "../../context/client.context";

const Home = () => {
    const {setLocationErrorMsg} = useContext(ClientContext);

    useEffect(() => {
      setLocationErrorMsg('');
    }, [])

    return (
        <div>
          <DefaultCity />
        </div>
    )
}

export default Home