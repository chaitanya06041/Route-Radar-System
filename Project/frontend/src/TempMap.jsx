import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const TempMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map) {
      const control = L.Routing.control({
        waypoints: [
          L.latLng(51.517, -0.13), // Example waypoints, replace with your own
          L.latLng(51.507, -0.10)
        ],
        lineOptions: {
          styles: [{ color: '#00f', opacity: 0.7 }]
        }
      }).addTo(map);
      
      return () => {
        map.removeControl(control);
      };
    }
  }, [map]);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default TempMap;
