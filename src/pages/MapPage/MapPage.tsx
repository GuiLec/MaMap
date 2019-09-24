import React from 'react';
import {BaseMap} from '../../components/BaseMap';
import {styled} from '../../lib/styled';
import {useMapPage} from './useMapPage';
import {Marker} from '../../components/Marker/Marker';
import bench from '../../res/images/bench.png';
import {MapEvent} from 'react-native-maps';
import {CreateMarkerButton} from '../../components/CreateMarkerButton';

export const MapPage = () => {
  const {
    mapRef,
    centerMapOnMyLocation,
    markersList,
    createMarker,
    isPositioningMarker,
    setIsPositioningMarker,
    mapRegion,
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
      <BaseMap mapView={mapRef} onPress={onMapPress} region={mapRegion}>
        {markersList.map(marker => (
          <Marker
            key={marker.id}
            latitude={marker.latitude}
            longitude={marker.longitude}
            imageSource={bench}
            anchor={{x: 0.5, y: 1}}
            onPress={() => {}}
            isSelected={true}
            counter={marker.counter}
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
            setIsPositioningMarker(!isPositioningMarker);
          }}
          isActive={isPositioningMarker}></CreateMarkerButton>
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
  left: 30;
  top: 100;
`;

const CenterButton = styled.TouchableOpacity`
  height: 30;
  background-color: ${props => props.theme.colors.white};
  border-width: 2px;
  border-color: ${props => props.theme.colors.black};
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;
