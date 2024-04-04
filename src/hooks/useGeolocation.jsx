import { useState, useEffect } from "react";


export default function useGeolocation (){
    
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    function handleLocationSettings(coordinates){
            setLatitude(coordinates.coords.latitude);
            setLongitude(coordinates.coords.longitude);
    }

    // When the Component loads at that time we want to access the users lat and longitude
    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(handleLocationSettings);
        }
    }, [navigator]);

    return [latitude,longitude];

}