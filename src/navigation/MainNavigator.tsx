import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { SongLyrics } from '../screens';

export type RootStackParamList = {
  MainTabs: undefined;
  SongLyrics: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="SongLyrics" component={SongLyrics} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
