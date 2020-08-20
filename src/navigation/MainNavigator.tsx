import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { SongLyric } from '../screens';

export type RootStackParamList = {
  MainTabs: undefined;
  SongLyric: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="SongLyric" component={SongLyric} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
