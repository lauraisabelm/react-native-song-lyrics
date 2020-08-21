import React from 'react';
import { StatusBar, Text } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainNavigator';

// COMPONENTS
import { Header, Space, Typography } from '../../components';

// RESOURCES
import { Content, MainContainer, SafeArea } from './styles';

type SongLyricNavigationProp = StackNavigationProp<RootStackParamList, 'SongLyric'>;

type Props = {
  navigation: SongLyricNavigationProp;
};

const SongLyric = ({ navigation }: Props) => {
  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <>
      <SafeArea />
      <StatusBar barStyle="light-content" />
      <MainContainer>
        <Header onPressArrow={goBackHandler} title="Lyrics" />
        <Content>
          <Typography size={25}>Song</Typography>
          <Space thickness={25} />
          <Text>Song Lyric</Text>
        </Content>
      </MainContainer>
    </>
  );
};

export default SongLyric;
