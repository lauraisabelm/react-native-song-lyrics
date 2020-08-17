import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { History, Search } from '../screens';

export type MainTabsParamList = {
  Search: undefined;
  History: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Navigator>
      <Screen name="Search" component={Search} />
      <Screen name="History" component={History} />
    </Navigator>
  );
};

export default TabNavigator;
