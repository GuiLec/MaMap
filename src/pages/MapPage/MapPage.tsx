import React from 'react';
import {BaseMap} from '../../components/BaseMap';
import {styled} from '../../lib/styled';
import {useMapPage} from './useMapPage';
import {Marker} from '../../components/Marker/Marker';
import bench from '../../res/images/bench.png';
import {MapEvent} from 'react-native-maps';
import {Alert} from 'react-native';

export const MapPage = () => {
  const {
    mapRef,
    centerMapOnMyLocation,
    markersList,
    createMarker,
    isPositioningMarker,
    setIsPositioningMarker,
  } = useMapPage();

  const onMapPress = (e: MapEvent) => {
    if (isPositioningMarker) {
      createMarker({
        id: `${markersList.length + 1}`,
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      });
    }
    setIsPositioningMarker(false);
  };

  return (
    <Container>
      <BaseMap mapView={mapRef} onPress={onMapPress}>
        {markersList.map(marker => (
          <Marker
            key={marker.id}
            latitude={marker.latitude}
            longitude={marker.longitude}
            imageSource={bench}
            anchor={{x: 0.5, y: 1}}
            onPress={() => {}}
            isSelected={true}
            counter={3}
          />
        ))}
      </BaseMap>
      <CenterButtonContainer>
        <CenterButton onPress={centerMapOnMyLocation}>
          <ButtonText>Center</ButtonText>
        </CenterButton>
      </CenterButtonContainer>
      <CreateMakerButtonContainer>
        <CreateMarkerButton
          onPress={() => {
            setIsPositioningMarker(true);
          }}
          isActive={isPositioningMarker}>
          <ButtonText>+ Marker</ButtonText>
        </CreateMarkerButton>
      </CreateMakerButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CenterButtonContainer = styled.View`
  position: absolute;
  right: 30;
  bottom: 30;
`;

const CreateMakerButtonContainer = styled.View`
  position: absolute;
  right: 30;
  bottom: 100;
`;

const CenterButton = styled.TouchableOpacity`
  height: 30;
  background-color: ${props => props.theme.colors.white};
  border-width: 2px;
  border-color: ${props => props.theme.colors.black};
`;

const CreateMarkerButton = styled.TouchableOpacity<{isActive: boolean}>`
  height: 30;
  background-color: ${props =>
    props.isActive ? props.theme.colors.black : props.theme.colors.white};
  border-width: 2px;
  border-color: ${props => props.theme.colors.black};
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;
