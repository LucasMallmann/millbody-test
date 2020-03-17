import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import Second from '~/pages/Second';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
};

export default Routes;
