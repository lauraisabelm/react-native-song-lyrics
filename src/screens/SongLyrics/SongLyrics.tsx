import React from 'react';
import { StatusBar } from 'react-native';

// LIBS
import { connect, ConnectedProps } from 'react-redux';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainNavigator';
import { RouteProp } from '@react-navigation/native';

// COMPONENTS
import { Header, Space, Typography } from '../../components';

// RESOURCES
import { Content, MainContainer, SafeArea } from './styles';
import { colors } from '../../utils/theme';
import { RootState } from '../../store';

type SongLyricsRouteProp = RouteProp<RootStackParamList, 'SongLyrics'>;
type SongLyricsNavigationProp = StackNavigationProp<RootStackParamList, 'SongLyrics'>;

type Props = {
  navigation: SongLyricsNavigationProp;
  route: SongLyricsRouteProp;
} & ConnectedProps<typeof connector>;

const SongLyrics = ({ lyrics, navigation, searchForm }: Props) => {
  let song = '';
  let artist = '';
  const { values } = searchForm;

  if (values) {
    song = values.song;
    artist = values.artist;
  }

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <>
      <SafeArea />
      <StatusBar barStyle="light-content" />
      <MainContainer>
        <Header backgroundColor={colors.blue} onPressArrow={goBackHandler} title="Lyrics" />
        <Content>
          <Typography color={colors.darkGray} size={30}>
            {song}
          </Typography>
          <Typography color={colors.grey} size={20}>
            {artist}
          </Typography>
          <Space thickness={25} />
          <Typography color={colors.dimGray} size={18}>
            {lyrics}
          </Typography>
        </Content>
      </MainContainer>
    </>
  );
};

const mapStateToProps = ({ form, lyrics }: RootState) => ({
  lyrics: lyrics.lyrics,
  searchForm: form.searchForm,
});

const connector = connect(mapStateToProps);

export default connector(SongLyrics);
