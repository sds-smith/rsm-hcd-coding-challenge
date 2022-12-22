import React from 'react';

import './map-marker.styles.scss';

const Marker = ({ text }) => {
    return (
        <div className='markerContainer'>
            <div className='pointer' />
            <div className='label'>{text}</div>
        </div>

    )
}

export default Marker