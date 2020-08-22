import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

// NAVIGATION
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

// COMPONENTS
import { Container, CustomAlert, FloatingButton, Header, SongItem } from '../../components';
import NoHistoryPlaceholder from './components/NoHistoryPlaceholder';

// RESOURCES
import { colors } from '../../utils/theme';
import { NativeStyles } from './styles';
import { HistorySongItem } from '../../utils/types';

type HistoryNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'History'>,
  StackNavigationProp<RootStackParamList>
>;

interface Props {
  navigation: HistoryNavigationProps;
}

const historyData = [
  {
    artist: 'Hola',
    id: '1',
    lyric: 'Lyric Text',
    song: 'Name',
  },
];

const flatlistKeyExtractor = (item: HistorySongItem) => item.id;

const History = ({ navigation }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const goToLyric = useCallback(() => {
    navigation.navigate('SongLyric');
  }, [navigation]);

  const flatlitsRenderItem = useCallback(
    ({ item }: { item: HistorySongItem }) => (
      <SongItem artist={item.artist} onPressItem={goToLyric} song={item.song} />
    ),
    [goToLyric],
  );

  const handleModalVisibility = useCallback((value: boolean) => {
    setModalVisible(value);
  }, []);

  const clearHistoryHandler = () => {
    console.log('clearing');
    handleModalVisibility(false);
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
