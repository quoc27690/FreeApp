import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListAnimations from '../screens/FlatListAnimations';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={FlatListAnimations} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
