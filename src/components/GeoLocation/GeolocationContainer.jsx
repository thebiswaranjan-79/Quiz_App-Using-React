import { useState, useEffect } from "react";
// import Geolocation from "./Geolocation";

export default function GeolocationContainer({children}){

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

    return (
        // <Geolocation latitude={latitude} longitude={longitude}/>
       <div>
             {children}
       </div>
    )

}


