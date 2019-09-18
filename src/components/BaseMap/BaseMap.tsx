import React from 'react';
import MapView from 'react-native-maps';
import {useBaseMap} from './useBaseMap';

interface Props {
  mapView: React.RefObject<MapView>;
  children?: Element[];
}

export const BaseMap = (props: Props) => {
  useBaseMap();

  return (
    <MapView
      style={{flex: 1}}
      ref={props.mapView}
      region={{
        latitude: 48.82,
        longitude: 2.3488,
        latitudeDelta: 0.05,
        longitudeDelta: 0.1,
      }}
      showsUserLocation={true}
      provider="google">
      {props.children}
    </MapView>
  );
};
