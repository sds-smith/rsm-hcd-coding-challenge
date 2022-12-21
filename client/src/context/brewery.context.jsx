import { useState, createContext } from 'react';

export const BreweryContext = createContext();

export const BreweryProvider = ({children}) => {
    const [ashevilleBreweries, setAshevilleBreweries] = useState([]);

    const hasBreweries = (array) => {
        return array.length > 0
    }

    const value = {
        ashevilleBreweries,
        setAshevilleBreweries,
        hasBreweries
    }

    return <BreweryContext.Provider value={value}>{children}</BreweryContext.Provider>
}