import { useState, createContext, FC } from 'react';
import {BreweryContextProps, ProviderProps} from '../utils/context.utils';
import { BreweryArray } from '../utils/types.utils';

export const BreweryContext = createContext<BreweryContextProps>({
    defaultBreweries: [null],
    setDefaultBreweries: ()=>{},
    breweriesNearMe: [null],
    setBreweriesNearMe: ()=>{},
    loadText: '',
    setLoadText: ()=>{},
    hasBreweries: ()=>false
});

export const BreweryProvider: FC<ProviderProps> = ({children}) => {
    const [defaultBreweries, setDefaultBreweries] = useState<BreweryArray>([null]);
    const [breweriesNearMe, setBreweriesNearMe] = useState<BreweryArray>([null]);
    const [loadText, setLoadText] = useState<string>('Loading...');

    const hasBreweries = (array: BreweryArray): boolean => {
        return array[0] !== null
    }

    const value = {
        defaultBreweries,
        setDefaultBreweries,
        breweriesNearMe,
        setBreweriesNearMe,
        loadText,
        setLoadText,
        hasBreweries
    }

    return <BreweryContext.Provider value={value}>{children}</BreweryContext.Provider>
}