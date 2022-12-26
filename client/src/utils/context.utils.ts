import { ReactNode } from "react";
import { BreweryType, BreweryArray } from "./types.utils";


export type BreweryContextProps = {
    defaultBreweries: BreweryArray;
    setDefaultBreweries(defaultBreweries: BreweryArray): void;
    breweriesNearMe: BreweryArray;
    setBreweriesNearMe(breweriesNearMe: BreweryArray): void;
    hasBreweries(array: BreweryArray): boolean
}

export type ClientContextProps = {
    clientLatLong: string;
    setClientLatLong(clientLatLong: string): void;
    locationErrorMsg: string;
    setLocationErrorMsg(locationErrorMsg: string): void;
}

export type ProviderProps = {
    children?: ReactNode
}
