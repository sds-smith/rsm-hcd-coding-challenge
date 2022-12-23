import { ReactNode } from "react";
import { BreweryType, BreweryArray } from "./types.utils";


export type BreweryContextProps = {
    ashevilleBreweries: BreweryArray;
    setAshevilleBreweries(ashevilleBreweries: BreweryArray): void;
    breweriesNearMe: BreweryArray;
    setBreweriesNearMe(breweriesNearMe: BreweryArray): void;
    hasBreweries(array: BreweryArray): boolean
}

export type ClientContextProps = {
    clientLatLong: string;
    setClientLatLong(clientLatLong: string): void
}

export type ProviderProps = {
    children?: ReactNode
}
