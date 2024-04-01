import { useEffect, useState } from "react";

export default function Geolocation(){
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
    }, [navigator])

    return (
        <div>
            <h1>Geolocation :</h1>
            <div>Latitude : {latitude}</div>
            <div>Longitude : {longitude}</div>
        </div>
    );
}
//=> Presentation Layer (UI Part)
// => Container Layer (Logic part)