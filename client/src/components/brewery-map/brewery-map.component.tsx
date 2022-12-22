import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "../map-marker/map-marker.component";

import './brewery-map.styles.scss'

const BreweryMap = ({center, name}) => {
  const defaultProps = {
    center,
    zoom: 15
  };

  return (
    <div className='mapContainer' >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          // lat={center.lat}
          // lng={center.lng}
          text={name}
        />
      </GoogleMapReact>
    </div>
  );
}

export default BreweryMap