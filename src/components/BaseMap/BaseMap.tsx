import React from 'react';
import MapView, {MapEvent, Region} from 'react-native-maps';

interface Props {
  mapView: React.RefObject<MapView>;
  children?: Element[];
  onPress?: (event: MapEvent) => void;
  region: Region;
}

export const BaseMap = (props: Props) => {
  return (
    <MapView
      style={{flex: 1}}
      ref={props.mapView}
      region={props.region}
      onPress={props.onPress}
      showsUserLocation={true}
      provider="google">
      {props.children}
    </MapView>
  );
};
