import React from 'react'
import GoogleMapReact, { MapOptions, Maps } from 'google-map-react'
// import PlaceInfo from "../PlaceInfo/index"
import Style from './Maps.module.scss'
import darkStyle from '../../mapStyle/darkColor.json'


const center = { // 東京駅を中心に設定
  lat: 35.68133204240732,
  lng: 139.76715698502676,
};

// const Pin = ({ lat, lng, text }: { lat: number, lng: number, text: string }) => <div>{text}</div>

const Map = () => {
  const googleMapsApiKey = { key: process.env.REACT_APP_googleMapsApiKey as string }
  const createMapOptions = (maps: Maps): MapOptions => {
    return {
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
      },
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: darkStyle
    }
  }
  return (
    <div style={{ height:'100vh', width:'100％'  } }>
    <GoogleMapReact
      bootstrapURLKeys={googleMapsApiKey}
      defaultCenter={center}
      defaultZoom={17}
      options={createMapOptions}
      >
        {/* <div className={ Style.pin}>
          <Pin
            lat={35.68133204240732}
            lng={1139.76715698502676}
            text="My Marker"
          />
        </div> */}
      {/* <PlaceInfo/> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
