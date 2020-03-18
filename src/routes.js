import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import Home from '~/pages/Home';
import Second from '~/pages/Second';

const Stack = createStackNavigator();

const Routes = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
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
