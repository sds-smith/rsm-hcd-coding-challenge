
const BreweryCard = ({brewery}) => {
    const {name, brewery_type, street, city, state, postal_code, website_url} = brewery;

    return (
        <div >
            <h2>{name}</h2>
            <p>{brewery_type}</p>
            <p>{street}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{postal_code}</p>
            <a href={website_url} target='_blank' rel='no-referrer'>{website_url}</a>
        </div>
    )
}

export default BreweryCard