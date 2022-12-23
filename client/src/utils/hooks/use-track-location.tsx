import { useState, useContext } from "react";
import { ClientContext } from "../../context/client.context";

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('');
    const [isFindingLocation, setIsFindingLocation] = useState(false);

    const {setClientLatLong} = useContext(ClientContext);

    const success = (position: GeolocationPosition) => {
        const clientLat = position.coords.latitude;
        const clientLong = position.coords.longitude;

        setClientLatLong(`${clientLat},${clientLong}`);
        setLocationErrorMsg('');
        setIsFindingLocation(false);
    }

    const error = () => {
        setLocationErrorMsg('Unable to retrieve your location')
        setIsFindingLocation(false)
    }

    const handleTrackLocation = () => {
        setIsFindingLocation(true)

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