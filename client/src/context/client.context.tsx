import { useState, createContext, FC } from 'react';
import { ClientContextProps, ProviderProps } from '../utils/context.utils';

export const ClientContext = createContext<ClientContextProps>({
    clientLatLong: '',
    setClientLatLong: ()=>{}
});

export const ClientProvider: FC<ProviderProps> = ({children}) => {
    const [clientLatLong, setClientLatLong] = useState('');

    const value = {
        clientLatLong,
        setClientLatLong
    }

    return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
}