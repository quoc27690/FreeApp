import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { BOTTOM_TAB_NAVIGATOR } from '@constants/index';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
