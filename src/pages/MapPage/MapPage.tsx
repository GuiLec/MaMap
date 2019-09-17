import React from 'react';
import {BaseMap} from '../../components/BaseMap';
import {styled} from '../../lib/styled';
import {useBaseMap} from '../../components/BaseMap/useBaseMap';

export const MapPage = () => {
  const {mapRef, centerMapOnMyLocation} = useBaseMap();

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
