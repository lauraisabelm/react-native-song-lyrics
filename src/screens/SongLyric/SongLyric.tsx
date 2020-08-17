import React from 'react';
import { Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainNavigator';

type SongLyricNavigationProp = StackNavigationProp<RootStackParamList, 'SongLyric'>;

type Props = {
  navigation: SongLyricNavigationProp;
};

const SongLyric = () => {
  return <Text>Song Lyric</Text>;
};

export default SongLyric;
