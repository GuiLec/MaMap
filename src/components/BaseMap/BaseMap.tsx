import React from 'react';
import MapView, {MapEvent} from 'react-native-maps';

interface Props {
  mapView: React.RefObject<MapView>;
  children?: Element[];
  onPress?: (event: MapEvent) => void;
}

export const BaseMap = (props: Props) => {
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
      onPress={props.onPress}
      showsUserLocation={true}
      provider="google">
      {props.children}
    </MapView>
  );
};
