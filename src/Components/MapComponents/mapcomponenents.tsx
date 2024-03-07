// ./src/Components/MapComponents/MapComponent.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    import('ol/Map').then(({ default: Map }) => {
      import('ol/View').then(({ default: View }) => {
        // Initialize your OpenLayers map here
        const map = new Map({
          target: mapRef.current,
          layers: [],
          view: new View({
            center: [0, 0],
            zoom: 2,
          }),
        });
      });
    });

    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
