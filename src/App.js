import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import light from '~/styles/themes/light';
// import dark from '~/styles/themes/dark';

import Routes from '~/routes';
import FullScreenContext from './store/FullScreenContext';

const App = () => {
  // const [theme, setTheme] = useState(light);
  const [fullscreen, setFullScreen] = useState(false);

  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <FullScreenContext.Provider value={{ fullscreen, setFullScreen }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#7159c1"
            hidden={fullscreen}
          />
          <Routes />
        </FullScreenContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
