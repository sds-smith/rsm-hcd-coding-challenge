import {FC} from 'react';

import './map-marker.styles.scss';

type MarkerProps = {
    text: string,
    lat: number,
    lng: number
}

const Marker: FC<MarkerProps> = ({ text }) => {
    return (
        <div className='markerContainer'>
            <div className='pointer' />
            <div className='label'>{text}</div>
        </div>

    )
}

export default Marker