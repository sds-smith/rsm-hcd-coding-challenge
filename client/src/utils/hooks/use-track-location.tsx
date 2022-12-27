import { useState, useContext } from "react";
import { ClientContext } from "../../context/client.context";
import { BreweryContext } from "../../context/brewery.context";

const useTrackLocation = () => {
    const [isFindingLocation, setIsFindingLocation] = useState(false);

    const {setClientLatLong, locationErrorMsg, setLocationErrorMsg} = useContext(ClientContext);
    const {setLoadText} = useContext(BreweryContext);

    const success = (position: GeolocationPosition) => {
        const clientLat = position.coords.latitude;
        const clientLong = position.coords.longitude;

        setClientLatLong(`${clientLat},${clientLong}`);
        setLocationErrorMsg('');
        setIsFindingLocation(false);
        setLoadText('Location Found.')
    }

    const error = () => {
        console.log('Unable to retrieve your location')
        setLocationErrorMsg('Unable to retrieve your location')
        setIsFindingLocation(false)
    }

    const handleTrackLocation = () => {
        setIsFindingLocation(true);
        setLoadText('Finding your Location...');

        if (!navigator.geolocation) {
            setLocationErrorMsg('Geolocation is not supported by your browser')
            setIsFindingLocation(false)
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    return {
        handleTrackLocation,
        locationErrorMsg,
        isFindingLocation
    }
}

export default useTrackLocation