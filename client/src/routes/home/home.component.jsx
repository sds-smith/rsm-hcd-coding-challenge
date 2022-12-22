import {useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Asheville from "../../components/asheville/asheville.component";
import { BreweryContext } from "../../context/brewery.context";
import { ClientContext } from "../../context/client.context";

import './home.styles.scss'

const Home = () => {
    const [breweriesError, setBreweriesError] = useState('');
    const {breweriesNearMe, setBreweriesNearMe, hasBreweries} = useContext(BreweryContext);
    const {clientLatLong} = useContext(ClientContext)

    const navigate = useNavigate();



    useEffect(() => {
        const getMyLocalBreweries = async () => {
          if (clientLatLong) {
            try {
              const response = await axios.get(`http://localhost:8000/v1/breweries/by-dist?latLong=${clientLatLong}`)
              const breweries = await response.data
              setBreweriesNearMe(breweries)
              setBreweriesError('')
            } catch (err) {
              setBreweriesError(err.message)
            }
          }
        }
        getMyLocalBreweries()
      }, [clientLatLong])

      useEffect(() => {
        if (hasBreweries(breweriesNearMe)) {
            navigate('/breweries-near-me')
        }
      }, [breweriesNearMe])

    return (
        <div>
          <Asheville />
        </div>
    )
}

export default Home