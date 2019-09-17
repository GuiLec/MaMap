import {useEffect, createRef} from 'react';
import MapView from 'react-native-maps';

const longitudeDelta = 0.01;
const latitudeDelta = 0.005;
const latitude = 48.815232;
const longitude = 2.3488;

export const useBaseMap = () => {
  const mapRef = createRef<MapView>();
  const centerMapOnMyLocation = () => {
    const region = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    };
    mapRef.current && mapRef.current.animateToRegion(region, 500);
  };
  useEffect(() => {}, []);

  return {mapRef, centerMapOnMyLocation};
};
