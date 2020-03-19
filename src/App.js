import React, { useState, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

import Routes from '~/routes';
import FullScreenContext from './store/FullScreenContext';
import ToggleThemeContext from './store/ToggleThemeContext';

const App = () => {
  const [theme, setTheme] = useState(dark);
  const [fullscreen, setFullScreen] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <FullScreenContext.Provider value={{ fullscreen, setFullScreen }}>
          <ToggleThemeContext.Provider value={toggleTheme}>
            <StatusBar
              barStyle="light-content"
              backgroundColor="#7159c1"
              hidden={fullscreen}
            />
            <Routes />
          </ToggleThemeContext.Provider>
        </FullScreenContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
