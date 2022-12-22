import { useEffect, useContext } from "react";
import {Routes, Route} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import BreweryPage from "./routes/brewery-page/brewery-page.component";
import BreweriesNearMe from "./routes/breweries-near-me/breweries-near-me.component";

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path='/breweries-near-me' element={<BreweriesNearMe />} />
                <Route path='/:breweryId' element={<BreweryPage />} />
            </Route>
        </Routes>
    )
}

export default App