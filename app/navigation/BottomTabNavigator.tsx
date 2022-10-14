import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN_NAME} from '@constants/index';
import Home from '@screen/home';
import Profile from '@screen/profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';
import {TEXT} from '@themes/Text';

const Tab = createBottomTabNavigator();

export const getLabelBottomTab = (route: any) => {
  let labelScreen = null;
  switch (route.name) {
    case SCREEN_NAME.HOME:
      labelScreen = <Text>{TEXT.HOME} 111</Text>;
      break;
    case SCREEN_NAME.PROFILE:
      labelScreen = <Text>{TEXT.PROFILE} 111</Text>;
      break;
  }
  return labelScreen;
};

const getIconBottomTab = (route: any, color: string) => {
  let iconScreen = null;
  switch (route.name) {
    case SCREEN_NAME.HOME:
      iconScreen = <Icon name="home" size={30} color={color} />;
      break;
    case SCREEN_NAME.PROFILE:
      iconScreen = <Icon name="user" size={30} color={color} />;
      break;
  }
  return iconScreen;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarLabel: () => getLabelBottomTab(route),
        tabBarIcon: ({color}) => getIconBottomTab(route, color),
        headerShown: false,
      })}>
      <Tab.Screen name={SCREEN_NAME.HOME} component={Home} />
      <Tab.Screen name={SCREEN_NAME.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
