import React from 'react';
import { Text } from 'react-native';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { Container } from '../../components';

type HistoryNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'History'>,
  StackNavigationProp<RootStackParamList>
>;

interface Props {
  navigation: HistoryNavigationProps;
}

const History = ({ navigation }: Props) => {
  return (
    <Container>
      <Text onPress={() => navigation.navigate('SongLyric')}>History</Text>
    </Container>
  );
};

export default History;
