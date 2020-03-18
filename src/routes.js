import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import Home from '~/pages/Home';
import Second from '~/pages/Second';
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
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text>toggle</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
};

export default Routes;
