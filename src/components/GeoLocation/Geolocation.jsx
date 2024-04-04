import useGeolocation from "../../hooks/useGeolocation";

export default function Geolocation(){

    const[latitude, longitude] = useGeolocation();

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