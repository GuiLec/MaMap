import {useEffect, createRef, useState} from 'react';
import MapView from 'react-native-maps';
import {Geolocation} from '../../lib/Geolocation';
import {markersList as initialMarkersList} from '../../modules/markersList';

const longitudeDelta = 0.01;
const latitudeDelta = 0.005;

interface Marker {
  latitude: number;
  longitude: number;
}

export const useBaseMap = () => {
  const mapRef = createRef<MapView>();

  const centerMapOnMyLocation = async () => {
    const position = await Geolocation.instance.getCurrentPosition();
    const region = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    };
    mapRef.current && mapRef.current.animateToRegion(region, 500);
  };

  const [markersList, setMarkersList] = useState<Marker[]>(initialMarkersList);

  useEffect(() => {
    (async () => {
      centerMapOnMyLocation();
    })();
  }, []);

  return {mapRef, centerMapOnMyLocation, markersList};
};
