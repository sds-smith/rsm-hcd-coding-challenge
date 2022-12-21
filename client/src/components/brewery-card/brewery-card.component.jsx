import BreweryMap from "../brewery-map/brewery-map.component";

const BreweryCard = ({brewery}) => {
    const {name, street, city, state, postal_code, latitude, longitude} = brewery;

    return (
        <div >
            <h2>{name}</h2>
            <p>{street}</p>
            <p>{`${city}, ${state} ${postal_code}`}</p>
            <BreweryMap lat={Number(latitude)} lng={Number(longitude)} name={name} />
        </div>
    )
}

export default BreweryCard