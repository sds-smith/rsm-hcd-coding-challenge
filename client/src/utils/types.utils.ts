export type CenterType = {
    lat: number,
    lng: number
}

export const defaultCenter = {
    lat: 0,
    lng: 0
}

export type BreweryType = {
    id: string,
    name: string,
    brewery_type: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    website_url: string,
    longitude: Number,
    latitude: Number,
}

export const defaultBreweryState = {
    id: '',
    name: '',
    brewery_type: '',
    street: '',
    city: '',
    state: '',
    postal_code: '',
    website_url: '',
    longitude: 0,
    latitude: 0,
}

export type BreweryArray = [BreweryType | null];

export type GetBreweryResponseType = {
  brewery: BreweryType,
  center: CenterType
}