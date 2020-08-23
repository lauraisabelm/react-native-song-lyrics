import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { SongLyrics } from '../screens';
import { HistoryLyricsItem } from '../utils/types';

export type RootStackParamList = {
  MainTabs: undefined;
  SongLyrics: {
    lyricsData?: HistoryLyricsItem;
  };
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
