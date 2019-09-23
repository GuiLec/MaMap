import {styled} from '../../lib/styled';
import React from 'react';
import {Image} from 'react-native';
import bench from '../../res/images/bench.png';

export const CreateMarkerButtonTouchable = styled.TouchableOpacity<{
  isActive: boolean;
}>`
  height: ${props => props.theme.gridUnit * 10};
  width: ${props => props.theme.gridUnit * 10};
  border-radius: ${props => props.theme.gridUnit * 5};
  background-color: ${props =>
    props.isActive
      ? props.theme.colors.activeBlur
      : props.theme.colors.inactiveBlur};
  align-items: center;
  justify-content: center;
`;

interface Props {
  onPress: () => void;
  isActive: boolean;
}

export const CreateMarkerButton = (props: Props) => {
  return (
    <CreateMarkerButtonTouchable
      isActive={props.isActive}
      onPress={props.onPress}>
      <Image source={bench} />
    </CreateMarkerButtonTouchable>
  );
};
