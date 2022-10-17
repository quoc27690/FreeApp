import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BOTTOM_TAB_NAVIGATOR, SCREEN_NAME} from '@constants/index';
import BottomTabNavigator from './BottomTabNavigator';
import {TEXT} from '@themes/Text';
import FlatListAnimations from '@screen/flatListAnimations';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name={SCREEN_NAME.FLATLIST_ANIMATIONS}
        component={FlatListAnimations}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
