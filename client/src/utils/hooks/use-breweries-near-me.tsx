import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { httpGetMyLocalBreweries, httpGetBreweryLatLong } from "../http/requests";
import { ClientContext } from "../../context/client.context";
import { BreweryContext } from "../../context/brewery.context";
import useTrackLocation from '../hooks/use-track-location';

import { GetBreweryResponseType, defaultBreweryState, defaultCenter } from "../types.utils";


const useBreweriesNearMe = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [breweriesError, setBreweriesError] = useState('');

    const {clientLatLong} = useContext(ClientContext);
    const {hasBreweries, defaultBreweries, breweriesNearMe, setBreweriesNearMe} = useContext(BreweryContext);

    const {handleTrackLocation} = useTrackLocation();

    const getMyLocalBreweries = async () => {
        if (clientLatLong) {
          try {
             const response = await httpGetMyLocalBreweries(clientLatLong);
             const {message, breweries} = response
             if (message === 'Breweries Retrieved') {
              setBreweriesNearMe(breweries)
              setBreweriesError('')
             } else {
              setBreweriesError(message)
             }
          } catch (err) {
            if (err instanceof Error) {
              setBreweriesError(err.message)
            } else if (typeof err === 'string') {
              setBreweriesError(err)
            } else {
              setBreweriesError(`Error getting breweries ${err}`)
            }
          }
        } else {
          handleTrackLocation();
        }
      };

    const getBrewery = () => {
      const breweryIdToFind = params.breweryId;
      const brewery = defaultBreweries.find(breweryToFind => breweryToFind !== null && breweryToFind.id === breweryIdToFind) ||
                      breweriesNearMe.find(breweryToFind => breweryToFind !== null && breweryToFind.id === breweryIdToFind);
        if (!brewery) {
          navigate('/');
        }
        if (brewery && !brewery.latitude || brewery && !brewery.longitude) {
          const getGeoCode = async () => {
              try {
                  const geoResponse = await httpGetBreweryLatLong(brewery.postal_code)
                  return {
                    brewery,
                    center: geoResponse.data
                  } as GetBreweryResponseType
              } catch(err) {
                  console.log(err);
                  return {
                    brewery,
                    center: {lat: 0, lng: 0}
                  } as GetBreweryResponseType
              }
          };
          getGeoCode();
      } else {
          if (brewery) {
            return {
              brewery, 
              center: {
                lat: Number(brewery.latitude),
                lng: Number(brewery.longitude)
              }
            } as GetBreweryResponseType
          }
          return {
            brewery: defaultBreweryState,
            center: defaultCenter
          } as GetBreweryResponseType
      }
    } 

    return {
        getMyLocalBreweries,
        breweriesError,
        getBrewery
    };
};

export default useBreweriesNearMe;