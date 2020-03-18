import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import light from '~/styles/themes/light';
// import dark from '~/styles/themes/dark';

import Routes from '~/routes';

const App = () => {
  // const [theme, setTheme] = useState(light);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" hidden />
      <ThemeProvider theme={light}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
