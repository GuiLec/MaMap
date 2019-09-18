import React, {Component} from 'react';
import {Marker as MapMarker} from 'react-native-maps';
import {ImageURISource, ImageRequireSource, Image} from 'react-native';
import {styled} from '../../lib/styled';
//import {isNil} from 'lodash';

interface Props {
  imageSource: ImageURISource | ImageRequireSource;
  latitude: number;
  longitude: number;
  anchor: {x: number; y: number};
  onPress: () => void;
  counter?: number;
  isSelected: boolean;
}

interface State {
  tracksViewChanges: boolean;
  isSelected: boolean;
  counter: number | null;
}

/**
 * @summary In this class, we define a Marker component.
 * @description The important thing to know and understand about this class is the usage of `tracksViewChanges`.
 * `tracksViewChanges` is a prop on react-native-maps' `Marker` Component which enables update on Marker thhrough the bridge.
 * Turning it off disables all Marker update through the react-native bridge. This is a huge performance gain.
 * @see https://github.com/react-native-community/react-native-maps/blob/master/docs/marker.md
 */
export class Marker extends Component<Props, State> {
  // Use an internal state to save currently rendered property
  state: State = {
    tracksViewChanges: true,
    isSelected: false,
    counter: null,
  };

  // If important props changes, activate tracksViewChanges which enable Marker update on Google Maps.
  // And save those new important props in the state.
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    return {
      tracksViewChanges:
        nextProps.isSelected !== prevState.isSelected ||
        nextProps.counter !== prevState.counter,
      isSelected: nextProps.isSelected,
      counter: nextProps.counter,
    };
  }

  // Do not rerender except if tracksViewChanges has changed (because otherwise, changes are not passed to Google Maps anyway).
  shouldComponentUpdate(_: Props, nextState: State) {
    return this.state.tracksViewChanges !== nextState.tracksViewChanges;
  }

  // When a render occured, turn off tracksViewChanges.
  componentDidUpdate() {
    if (this.state.tracksViewChanges) {
      this.setState({tracksViewChanges: false});
    }
  }

  render() {
    return (
      <MapMarker
        coordinate={{
          latitude: this.props.latitude,
          longitude: this.props.longitude,
        }}
        anchor={this.props.anchor}
        testID="MapMarker"
        onPress={event => {
          event.stopPropagation();
          this.props.onPress();
        }}
        tracksViewChanges={this.state.tracksViewChanges}>
        <Container>
          <Image source={this.props.imageSource} />
          {!!this.state.counter && (
            <CounterContainer>
              <Counter>{`${this.state.counter}`}</Counter>
            </CounterContainer>
          )}
        </Container>
      </MapMarker>
    );
  }
}

const Container = styled.View`
  padding-top: ${({theme}) => theme.gridUnit}px;
  padding-horizontal: ${({theme}) => theme.gridUnit / 2}px;
`;

const CounterContainer = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  height: ${({theme}) => theme.gridUnit * 3};
  width: ${({theme}) => theme.gridUnit * 3};
  border-radius: ${({theme}) => (theme.gridUnit * 5) / 4};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.black};
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

const Counter = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.small}px;
  color: ${({theme}) => theme.colors.black};
`;
