"use client"
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat:  40529,
  lng: 96998
};

const MyGoogleMap = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add any additional components or markers here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyGoogleMap;