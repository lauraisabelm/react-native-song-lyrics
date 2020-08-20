import * as React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { History, Search } from '../screens';
import { colors } from '../utils/theme';

type Route = RouteProp<Record<string, object | undefined>, string>;

export type MainTabsParamList = {
  Search: undefined;
  History: undefined;
};

const Tab = createBottomTabNavigator();

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    let iconName = 'search';
    if (route.name === 'Search') {
      iconName = 'search';
    } else if (route.name === 'History') {
      iconName = 'history';
    }
    return <MaterialIcon name={iconName} size={size} color={color} />;
  },
});

const navigatorTabBarOptions = {
  allowFontScalling: false,
  activeTintColor: colors.blue,
  inactiveTintColor: colors.gray,
  labelStyle: {
    fontSize: 14,
  },
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions} tabBarOptions={navigatorTabBarOptions}>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
