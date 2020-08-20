import React from 'react';
import { Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { Container } from '../../components';

type SongLyricNavigationProp = StackNavigationProp<RootStackParamList, 'SongLyric'>;

type Props = {
  navigation: SongLyricNavigationProp;
};

const SongLyric = ({ navigation }: Props) => {
  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Text onPress={goBackHandler}>Song Lyric</Text>
    </Container>
  );
};

export default SongLyric;
