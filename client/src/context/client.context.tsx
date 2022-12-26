import { useState, createContext, FC } from 'react';
import { ClientContextProps, ProviderProps } from '../utils/context.utils';

export const ClientContext = createContext<ClientContextProps>({
    clientLatLong: '',
    setClientLatLong: ()=>{},
    locationErrorMsg: '',
    setLocationErrorMsg: ()=>{}
});

export const ClientProvider: FC<ProviderProps> = ({children}) => {
    const [clientLatLong, setClientLatLong] = useState('');
    const [locationErrorMsg, setLocationErrorMsg] = useState('');


    const value = {
        clientLatLong,
        setClientLatLong,
        locationErrorMsg, 
        setLocationErrorMsg
    }

    return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
}