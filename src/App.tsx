import React from 'react';
import {MapPage} from './pages/MapPage';
import {ThemeProvider} from 'styled-components';
import {theme} from './lib/theme';

// API key iOS : AIzaSyBQnjjZLmlg0Z-oax_LEVkB0-OzJ9lhyDM
// API key Android : AIzaSyBQnjjZLmlg0Z-oax_LEVkB0-OzJ9lhyDM

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MapPage />
    </ThemeProvider>
  );
};

export default App;
