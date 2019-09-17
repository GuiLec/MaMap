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
        latitude: 42.882004,
        longitude: 74.582748,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      provider="google"
    />
  );
};
