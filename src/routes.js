import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import Home from '~/pages/Home';
import Second from '~/pages/Second';
import Third from './pages/Third';

import Switcher from '~/components/Switcher';

import FullScreenContext from './store/FullScreenContext';

const Stack = createStackNavigator();

const Routes = () => {
  const { colors } = useContext(ThemeContext);
  const { fullscreen } = useContext(FullScreenContext);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: !fullscreen,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#f8f8f8',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerRight: () => <Switcher />,
        }}
      />
      <Stack.Screen
        name="Second"
        component={Second}
        options={{
          headerTitle: 'Parte 2',
        }}
      />
      <Stack.Screen
        name="Third"
        component={Third}
        options={{ headerTitle: 'Parte Final' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
