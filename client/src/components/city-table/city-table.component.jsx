import TableRow from '../table-row/table-row.component'

import './city-table.styles.css'

const CityTable = ({city, breweries}) => {

    return (
        <table>
            <caption>{`${city} Breweries`}</caption>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Address</th>
                <th>Website</th>
            </tr>
            { 
                breweries.map(brewery => (
                        <TableRow key={brewery.id} brewery={brewery} />
                    ) 
                )
            }
        </table>
    )
}

export default CityTable