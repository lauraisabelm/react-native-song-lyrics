import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { SongLyric } from '../screens';

export type RootStackParamList = {
  MainTabs: undefined;
  SongLyric: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Navigator initialRouteName="MainTabs">
      <Screen name="MainTabs" component={TabNavigator} />
      <Screen name="SongLyric" component={SongLyric} />
    </Navigator>
  );
};

export default MainNavigator;
