import TableRow from '../table-row/table-row.component'

import './city-table.styles.css'

const CityTable = ({city, breweries}) => {

    return (
        <table>
            <caption>{`${city} Breweries`}</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
            { 
                breweries.map(brewery => (
                        <TableRow key={brewery.id} brewery={brewery} />
                    ) 
                )
            }
            </tbody>

        </table>
    )
}

export default CityTable