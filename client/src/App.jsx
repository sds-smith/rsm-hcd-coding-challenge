import { useEffect, useContext } from "react";
import {Routes, Route} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import BreweryCard from "./routes/brewery-card/brewery-card.component";
import CityTable from "./components/city-table/city-table.component.jsx"

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path='/breweries-near-me' element={<CityTable />} />
                <Route path='/:breweryId' element={<BreweryCard />} />
            </Route>
        </Routes>
    )
}

export default App