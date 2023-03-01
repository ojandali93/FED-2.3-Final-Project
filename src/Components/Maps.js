import React, { useContext, useState } from 'react'
import Map from 'react-map-gl';
import { MainContext } from '../Context/MainContext';

let w = window.innerWidth;

const Maps = () => {

  const {longitude, latitude, zoom} = useContext(MainContext)

  const defaultProps = {
    latitude: latitude,
    longitude: longitude,
    zoom: zoom
  };

  let mapSize = w - 434

  return (
    <div className='map' style={{height: '100vh', width: mapSize}}>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoib21hcmphbmRhbGkiLCJhIjoiY2xlb3B5dzJlMDRzNTNwbnZsZDEza3o2ZiJ9.uct5xpQC2xd-W6dm_DOYDA"
        initialViewState={{latitude: latitude, longitude: longitude, zoom: zoom}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  )
}

export default Maps