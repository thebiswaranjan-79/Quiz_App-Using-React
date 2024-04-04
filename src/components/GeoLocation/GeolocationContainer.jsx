import useGeolocation from "../../hooks/useGeolocation"

export default function GeolocationContainer (BaseContainer){

    const[latitude, longitude] = useGeolocation();

    return function EnhancedGeolocation(props){
        return (
            <BaseContainer {...props} latitude = {latitude} longitude = {longitude} />
        )
    }
}