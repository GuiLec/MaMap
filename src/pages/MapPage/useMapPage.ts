import {useEffect, createRef, useState} from 'react';
import MapView, {Region} from 'react-native-maps';
import {Geolocation} from '../../lib/Geolocation';
import {markersList as initialMarkersList} from '../../modules/markersList';

const longitudeDelta = 0.01;
const latitudeDelta = 0.005;

const initialMapCoords = {
  latitude: 48.82,
  longitude: 2.3488,
  latitudeDelta: 0.05,
  longitudeDelta: 0.1,
};

interface Marker {
  id: string;
  latitude: number;
  longitude: number;
}

export const useMapPage = () => {
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

  const [isPositioningMarker, setIsPositioningMarker] = useState<boolean>(
    false,
  );

  const [mapRegion, setMapRegion] = useState<Region>(initialMapCoords);

  const createMarker = (marker: Marker) => {
    setMarkersList([
      ...markersList,
      {
        id: `${markersList.length + 1}`,
        latitude: marker.latitude,
        longitude: marker.longitude,
      },
    ]);
  };

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        centerMapOnMyLocation();
      }, 500);
    })();
  }, []);

  return {
    mapRef,
    centerMapOnMyLocation,
    markersList,
    createMarker,
    isPositioningMarker,
    setIsPositioningMarker,
    mapRegion,
    setMapRegion,
  };
};
