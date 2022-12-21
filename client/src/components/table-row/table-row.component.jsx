
const TableRow = ({brewery}) => {
    const {name, brewery_type, street, city, state, postal_code, website_url} = brewery;

    return (
        <tr >
            <td>{name}</td>
            <td>{brewery_type}</td>
            <td>{`${street} ${city}, ${state} ${postal_code}`}</td>
            <td>
                <a href={website_url} target='_blank' rel='no-referrer'>{website_url}</a>
            </td>
        </tr>
    )
}

export default TableRow