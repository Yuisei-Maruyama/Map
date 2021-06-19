import React, { useCallback, useRef } from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import PlaceInfo from "../PlaceInfo/index"

const containerStyle = {
  width: "100%",
  height: "50vh",
};

const center = { // 東京駅を中心に設定
  lat: 35.68133204240732,
  lng: 139.76715698502676,
};

const options = {
  zoomControl: true,
};

const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey as string,
    libraries: ["places"],
  })

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, [])

  if (loadError) return <>{"Error"}</>;
  if (!isLoaded) return <>{"Loading..."}</>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={options}
      onLoad={onMapLoad}
    >
      <PlaceInfo/>
    </GoogleMap>
  );
};

export default Maps;
