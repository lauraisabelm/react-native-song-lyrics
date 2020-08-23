import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

// LIBS
import AsyncStorage from '@react-native-community/async-storage';

// NAVIGATION
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

// COMPONENTS
import { Container, CustomAlert, FloatingButton, Header, SongItem } from '../../components';
import NoHistoryPlaceholder from './components/NoHistoryPlaceholder';

// RESOURCES
import { colors } from '../../utils/theme';
import { NativeStyles } from './styles';
import { HistoryLyricsItem } from '../../utils/types';

type HistoryNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'History'>,
  StackNavigationProp<RootStackParamList>
>;

interface Props {
  navigation: HistoryNavigationProps;
}

const flatlistKeyExtractor = (item: HistoryLyricsItem) => item.id;

const History = ({ navigation }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryLyricsItem[]>([]);

  const getHistory = useCallback(() => {
    let history;
    const getHistoryData = async () => {
      try {
        const result = await AsyncStorage.getItem('history');
        if (result !== JSON.stringify(historyData)) {
          history = result !== null ? JSON.parse(result) : [];
          setHistoryData(history);
        }
      } catch (err) {
        console.log('Something wrong happened getting the history data');
        return [];
      }
    };
    getHistoryData();
  }, [historyData]);

  useFocusEffect(getHistory);

  const goToLyric = useCallback(
    (item: HistoryLyricsItem) => {
      navigation.navigate('SongLyrics', { lyricsData: item });
    },
    [navigation],
  );

  const flatlitsRenderItem = useCallback(
    ({ item }: { item: HistoryLyricsItem }) => (
      <SongItem artist={item.artist} onPressItem={goToLyric.bind(null, item)} song={item.song} />
    ),
    [goToLyric],
  );

  const handleModalVisibility = useCallback((value: boolean) => {
    setModalVisible(value);
  }, []);

  const clearHistoryHandler = async () => {
    try {
      await AsyncStorage.removeItem('history');
      setHistoryData([]);
      handleModalVisibility(false);
    } catch (err) {
      console.log('Something wrong happened removing the history data');
    }
  };

  return (
    <Container style={NativeStyles.mainContainer}>
      <Header
        backgroundColor={colors.white}
        colorTitle={colors.dimGray}
        withoutArrow
        title="History"
      />
      <FlatList
        contentContainerStyle={NativeStyles.flatlistContent}
        data={historyData}
        keyExtractor={flatlistKeyExtractor}
        ListEmptyComponent={NoHistoryPlaceholder}
        renderItem={flatlitsRenderItem}
        style={NativeStyles.flatlist}
      />
      {historyData.length > 0 && (
        <FloatingButton onPressClearHistory={handleModalVisibility.bind(null, true)} />
      )}
      <CustomAlert
        isVisible={isModalVisible}
        onMainButtonPress={clearHistoryHandler}
        onSecondButtonPress={handleModalVisibility.bind(null, false)}
        text="Are you sure you want to clear your search history?"
        title="ALERT"
      />
    </Container>
  );
};

export default History;
