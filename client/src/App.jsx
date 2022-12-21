import { useEffect, useContext } from "react";
import {Routes, Route} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import BreweryCard from "./routes/brewery-card/brewery-card.component";

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path='/:breweryId' element={<BreweryCard />} />
            </Route>
        </Routes>
    )
}

export default App