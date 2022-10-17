import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN_NAME} from '@constants/index';
import Home from '@screen/home';
import Profile from '@screen/profile';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text} from 'react-native';
import {TEXT} from '@themes/Text';

const Tab = createBottomTabNavigator();

export const getLabelBottomTab = (route: any, color: string) => {
  let labelScreen = null;
  switch (route.name) {
    case SCREEN_NAME.HOME:
      labelScreen = <Text style={[styles.text, {color}]}>{TEXT.HOME}</Text>;
      break;
    case SCREEN_NAME.PROFILE:
      labelScreen = <Text style={[styles.text, {color}]}>{TEXT.PROFILE}</Text>;
      break;
  }
  return labelScreen;
};

const getIconBottomTab = (route: any, color: string) => {
  let iconScreen = null;
  switch (route.name) {
    case SCREEN_NAME.HOME:
      iconScreen = <Icon name="home" size={25} color={color} />;
      break;
    case SCREEN_NAME.PROFILE:
      iconScreen = <Icon name="user" size={25} color={color} />;
      break;
  }
  return iconScreen;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarLabel: ({color}) => getLabelBottomTab(route, color),
        tabBarIcon: ({color}) => getIconBottomTab(route, color),
        headerShown: false,
      })}>
      <Tab.Screen name={SCREEN_NAME.HOME} component={Home} />
      <Tab.Screen name={SCREEN_NAME.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});

export default BottomTabNavigator;
