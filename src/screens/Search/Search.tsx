import React from 'react';
import { Text } from 'react-native';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { Container } from '../../components';

type SearchNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'Search'>,
  StackNavigationProp<RootStackParamList>
>;

const Search = ({ navigation }: { navigation: SearchNavigationProps }) => {
  return (
    <>
      <Container>
        <Text onPress={() => navigation.navigate('SongLyric')}>Search</Text>
      </Container>
    </>
  );
};

export default Search;
