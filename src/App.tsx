import React from 'react';
import {MapPage} from './pages/MapPage';
import {ThemeProvider} from './lib/styled';
import {theme} from './lib/theme';
import {Provider} from 'react-redux';
import {store} from './modules/store';

// API key iOS : AIzaSyBQnjjZLmlg0Z-oax_LEVkB0-OzJ9lhyDM
// API key Android : AIzaSyBQnjjZLmlg0Z-oax_LEVkB0-OzJ9lhyDM

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MapPage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
