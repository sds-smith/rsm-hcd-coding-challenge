import { useState, createContext } from 'react';

export const ClientContext = createContext();

export const ClientProvider = ({children}) => {
    const [clientLatLong, setClientLatLong] = useState('');

    const value = {
        clientLatLong,
        setClientLatLong
    }

    return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
}