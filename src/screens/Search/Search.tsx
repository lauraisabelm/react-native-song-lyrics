import React, { ComponentType, useCallback, useState } from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

// LIBS
import { compose } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNetInfo } from '@react-native-community/netinfo';

// NAVIGATION
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
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

type SearchNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'Search'>,
  StackNavigationProp<RootStackParamList>
>;

type FormValues = {
  artist: string;
  song: string;
};

type PropsFromRedux = InjectedFormProps<FormValues>;
type Props = PropsFromRedux & {
  navigation: SearchNavigationProps;
};

const ConnectivyComponent = () => (
  <ConnectivityContainer>
    <Typography color={colors.white} size={18} textAlign="center">
      No internet Connection
    </Typography>
  </ConnectivityContainer>
);

const Search = ({ navigation }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const netInfo = useNetInfo();
  const { isConnected } = netInfo;

  const goToLyric = () => {
    navigation.navigate('SongLyric');
  };

  const handleModalVisibility = useCallback((value: boolean) => {
    setModalVisible(value);
  }, []);

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
              {isConnected ? 'Your Lyric ♫' : 'Not Available'}
            </Typography>
            <FormContainer>
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
              <Space thickness={isConnected ? 60 : 30} />
              <SearchButton disabled={!isConnected} onPress={goToLyric}>
                <Icon color={colors.white} name="search" size={40} />
              </SearchButton>
            </FormContainer>
            {false && <PreviousSearchItem artist="Hola" song="Hola" />}
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

export default compose<ComponentType<Props>>(
  reduxForm<FormValues>({
    form: 'searchForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
  }),
)(Search);
