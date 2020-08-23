import React, { ComponentType, useCallback, useState } from 'react';
import { ActivityIndicator, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

// LIBS
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';

// NAVIGATION
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

// COMPONENTS
import { Container, CustomAlert, CustomTextInput, Space, Typography } from '../../components';
import PreviousSearchItem from './components/PreviousSearchItem';

// RESOURCES
import {
  BackgroundContainer,
  ConnectivityContainer,
  FormContainer,
  LogoImage,
  NativeStyles,
  Scroll,
  SearchButton,
  Title,
} from './styles';
import { Background, Logo } from '../../assets/images';
import { colors } from '../../utils/theme';
import { required } from '../../utils/validate';
import { RootState } from '../../store';
import { getLyrics } from '../../actions';
import { HistoryLyricsItem } from '../../utils/types';

type SearchNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'Search'>,
  StackNavigationProp<RootStackParamList>
>;

type FormValues = {
  artist: string;
  song: string;
};

type PropsFromRedux = ConnectedProps<typeof connector> & InjectedFormProps<FormValues>;
type Props = PropsFromRedux & {
  navigation: SearchNavigationProps;
};

const lastSearchInitialValue = {
  artist: '',
  id: '',
  lyrics: '',
  song: '',
};

const ConnectivyComponent = () => (
  <ConnectivityContainer>
    <Typography color={colors.white} size={18} textAlign="center">
      No internet Connection
    </Typography>
  </ConnectivityContainer>
);

const Search = ({ getLyricsConnected, loading, navigation, searchForm, valid }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [lastSearch, setLastSearch] = useState<HistoryLyricsItem>(lastSearchInitialValue);

  const netInfo = useNetInfo();
  const { isConnected } = netInfo;

  const getLastSearch = useCallback(() => {
    let history;
    const getHistoryData = async () => {
      try {
        const result = await AsyncStorage.getItem('history');
        history = result !== null ? JSON.parse(result) : [];
        const previousData = history.length > 0 ? history[0] : lastSearchInitialValue;
        setLastSearch(previousData);
      } catch (err) {
        console.log('Something wrong happened getting the history data');
        return [];
      }
    };
    getHistoryData();
  }, []);

  useFocusEffect(getLastSearch);

  const goToLyrics = useCallback(
    (songData?: HistoryLyricsItem) => {
      if (songData) {
        navigation.navigate('SongLyrics', { lyricsData: songData });
      } else {
        navigation.navigate('SongLyrics', {});
      }
    },
    [navigation],
  );

  const handleModalVisibility = useCallback((value: boolean) => {
    setModalVisible(value);
  }, []);

  const getSongLyrics = useCallback(() => {
    const { values } = searchForm;
    if (values) {
      Keyboard.dismiss();
      getLyricsConnected({
        artist: values.artist,
        song: values.song,
        onSuccess: goToLyrics,
        onError: handleModalVisibility,
      });
    }
  }, [getLyricsConnected, goToLyrics, handleModalVisibility, searchForm]);

  return (
    <Container style={{ backgroundColor: isConnected ? colors.white : colors.orange }}>
      <StatusBar barStyle={isConnected ? 'dark-content' : 'light-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <BackgroundContainer resizeMode="cover" source={Background}>
          {!isConnected && ConnectivyComponent()}
          <Scroll contentContainerStyle={NativeStyles.scroll}>
            <LogoImage resizeMode="contain" source={Logo} />
            <Title color={colors.orange} size={40}>
              Search
            </Title>
            <Typography color={colors.orange} size={30}>
              {isConnected ? 'Your Lyrics ♫' : 'Not Available'}
            </Typography>
            <FormContainer>
              <Space />
              <Field
                name="artist"
                placeholder="Artist"
                component={CustomTextInput}
                validate={[required]}
              />
              <Space />
              <Field
                name="song"
                placeholder="Song"
                component={CustomTextInput}
                validate={[required]}
              />
              <Space thickness={lastSearch.id ? 30 : 60} />
              <SearchButton disabled={loading || !isConnected || !valid} onPress={getSongLyrics}>
                {loading ? (
                  <ActivityIndicator color={colors.white} />
                ) : (
                  <Icon color={colors.white} name="search" size={40} />
                )}
              </SearchButton>
              <Space />
            </FormContainer>
            {lastSearch.id ? (
              <PreviousSearchItem
                artist={lastSearch.artist}
                onPressItem={goToLyrics.bind(null, lastSearch)}
                song={lastSearch.song}
              />
            ) : null}
          </Scroll>
        </BackgroundContainer>
      </TouchableWithoutFeedback>
      <CustomAlert
        isVisible={isModalVisible}
        onMainButtonPress={handleModalVisibility.bind(null, false)}
        text="No lyrics found"
        title="SORRY"
      />
    </Container>
  );
};

const mapStateToProps = ({ form, lyrics }: RootState) => ({
  error: lyrics.error,
  loading: lyrics.loading,
  lyrics: lyrics.lyrics,
  searchForm: form.searchForm,
});

const mapDispatchToProps = {
  getLyricsConnected: ({
    artist,
    song,
    onSuccess,
    onError,
  }: {
    artist: string;
    song: string;
    onSuccess: () => void;
    onError: (value: boolean) => void;
  }) => getLyrics({ artist, song, onSuccess, onError }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default compose<ComponentType<Props>>(
  reduxForm<FormValues>({
    form: 'searchForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
  }),
  connector,
)(Search);
