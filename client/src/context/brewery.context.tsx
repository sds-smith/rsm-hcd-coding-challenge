import { useState, createContext, FC } from 'react';
import {BreweryContextProps, ProviderProps} from '../utils/context.utils';
import { BreweryArray } from '../utils/types.utils';

export const BreweryContext = createContext<BreweryContextProps>({
    ashevilleBreweries: [null],
    setAshevilleBreweries: ()=>{},
    breweriesNearMe: [null],
    setBreweriesNearMe: ()=>{},
    hasBreweries: ()=>false
});

export const BreweryProvider: FC<ProviderProps> = ({children}) => {
    const [ashevilleBreweries, setAshevilleBreweries] = useState<BreweryArray>([null]);
    const [breweriesNearMe, setBreweriesNearMe] = useState<BreweryArray>([null]);

    const hasBreweries = (array: BreweryArray): boolean => {
        return array[0] !== null
    }

    const value = {
        ashevilleBreweries,
        setAshevilleBreweries,
        breweriesNearMe,
        setBreweriesNearMe,
        hasBreweries
    }

    return <BreweryContext.Provider value={value}>{children}</BreweryContext.Provider>
}