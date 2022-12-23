import { FC } from "react";
import { Link } from "react-router-dom";

import { BreweryType } from "../../utils/types.utils";

import './table-row.styles.scss';

type TableRowProps = {
    brewery: BreweryType
}

const TableRow: FC<TableRowProps> = ({brewery}) => {
    const {id, name, brewery_type, street, city, state, postal_code, website_url} = brewery;

    return (
        <tr >
            <td><Link className='tableLink' to={`/${id}`}>{name}</Link></td>
            <td>{brewery_type}</td>
            <td>{`${street} ${city}, ${state} ${postal_code}`}</td>
            <td>
                <a className='tableLink' href={website_url} target='_blank' rel='no-referrer'>{website_url}</a>
            </td>
        </tr>
    )
}

export default TableRow