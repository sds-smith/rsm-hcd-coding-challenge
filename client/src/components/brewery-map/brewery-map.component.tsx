import {FC} from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "../map-marker/map-marker.component";

import { CenterType } from "../../utils/types.utils";

import './brewery-map.styles.scss';

type BreweryMapProps = {
  center: CenterType,
  name: string,
  zoom: number
}

const BreweryMap: FC<BreweryMapProps> = ({center, name, zoom}) => {

  return (
    <div className='mapContainer' >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          text={name}
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
}

export default BreweryMap