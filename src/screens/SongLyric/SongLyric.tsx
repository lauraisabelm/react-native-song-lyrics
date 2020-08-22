import React from 'react';
import { StatusBar } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainNavigator';

// COMPONENTS
import { Header, Space, Typography } from '../../components';

// RESOURCES
import { Content, MainContainer, SafeArea } from './styles';
import { colors } from '../../utils/theme';

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
        <Header backgroundColor={colors.blue} onPressArrow={goBackHandler} title="Lyric" />
        <Content>
          <Typography color={colors.darkGray} size={30}>
            Song
          </Typography>
          <Typography color={colors.grey} size={20}>
            Artist
          </Typography>
          <Space thickness={25} />
          <Typography color={colors.dimGray} size={18}>
            Song Lyric
          </Typography>
        </Content>
      </MainContainer>
    </>
  );
};

export default SongLyric;
