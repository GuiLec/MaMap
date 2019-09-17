import React, {createRef} from 'react';
import {BaseMap} from '../../components/BaseMap';
import {styled} from '../../lib/styled';
import MapView from 'react-native-maps';

const longitudeDelta = 0.01;
const latitudeDelta = 0.005;
const latitude = 48.815232;
const longitude = 2.3488;

export const MapPage = () => {
  const mapRef = createRef<MapView>();
  const centerMapOnMyLocation = () => {
    const region = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    };
    mapRef.current && mapRef.current.animateToRegion(region, 2000);
  };

  return (
    <Container>
      <BaseMap mapView={mapRef} />
      <ButtonContainer>
        <CenterButton onPress={centerMapOnMyLocation}>
          <CenterButtonText>Center</CenterButtonText>
        </CenterButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  position: absolute;
  right: 30;
  bottom: 30;
`;

const CenterButton = styled.TouchableOpacity`
  height: 30;
  background-color: ${props => props.theme.colors.white};
  border-width: 2px;
  border-color: ${props => props.theme.colors.black};
`;

const CenterButtonText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;
