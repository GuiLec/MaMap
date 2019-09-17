import React from 'react';
import MapView from 'react-native-maps';
import {useBaseMap} from './useBaseMap';

interface Props {
  mapView: React.RefObject<MapView>;
}

export const BaseMap = (props: Props) => {
  useBaseMap();

  return (
    <MapView
      style={{flex: 1}}
      ref={props.mapView}
      region={{
        latitude: 48.815232,
        longitude: 2.3488,
        latitudeDelta: 0.005,
        longitudeDelta: 0.01,
      }}
      showsUserLocation={true}
      provider="google"
    />
  );
};
