import {useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Banner from "../../components/banner/banner.component";
import Asheville from "../../components/asheville/asheville.component";
import useTrackLocation from '../../hooks/use-track-location';
import { BreweryContext } from "../../context/brewery.context";
import { ClientContext } from "../../context/client.context";

const Home = () => {
    const [breweriesError, setBreweriesError] = useState('');
    const {handleTrackLocation} = useTrackLocation();
    const {breweriesNearMe, setBreweriesNearMe, hasBreweries} = useContext(BreweryContext);
    const {clientLatLong} = useContext(ClientContext)

    const navigate = useNavigate();

    const onClick = () => {
        console.log('click')
        handleTrackLocation()
    }

    useEffect(() => {
        const getMyLocalBreweries = async () => {
          if (clientLatLong) {
            try {
              const response = await axios.get(`http://localhost:8000/v1/breweries/by-dist?latLong=${clientLatLong}`)
              const breweries = await response.data
              console.log(breweries)
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
          <Banner />
          <Asheville />
          <button onClick={onClick} >Find Breweries Near Me</button>
        </div>
    )
}

export default Home