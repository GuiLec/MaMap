import React, {Fragment} from 'react';
import MapView from 'react-native-maps';

// API key iOS : AIzaSyBQnjjZLmlg0Z-oax_LEVkB0-OzJ9lhyDM
// API key Android : AIzaSyBQnjjZLmlg0Z-oax_LEVkB0-OzJ9lhyDM

const App = () => {
  return (
    <Fragment>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        provider="google"
      />
    </Fragment>
  );
};

export default App;
