// LIBS
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

// RESOURCES
import { SET_LOADING, SET_LYRICS, LyricsActionTypes } from './types';
import { requestLyric } from '../services';
import { HistoryLyricsItem } from '../utils/types';

const checkLyricsExistence = (
  historyData: HistoryLyricsItem[],
  newLyrics: HistoryLyricsItem,
): boolean => {
  const foundLyrics = historyData.find((lyrics: HistoryLyricsItem) => lyrics.id === newLyrics.id);
  const lyricsAlreadyExist = !!foundLyrics;
  return lyricsAlreadyExist;
};

const addLyricsToHistoryData = async ({
  artist,
  lyrics,
  song,
}: {
  artist: string;
  lyrics: string;
  song: string;
}) => {
  try {
    const lyricsData: HistoryLyricsItem = {
      artist,
      id: `${artist}-${song}`,
      lyrics,
      song,
    };
    const historyData = await AsyncStorage.getItem('history');
    const parsedHistoryData = historyData !== null ? JSON.parse(historyData) : [];
    const lyricsAlreadyExists: boolean = checkLyricsExistence(parsedHistoryData, lyricsData);

    if (!lyricsAlreadyExists) {
      const newHistoryData: HistoryLyricsItem[] = [lyricsData, ...parsedHistoryData];
      await AsyncStorage.setItem('history', JSON.stringify(newHistoryData));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getLyrics = ({
  artist,
  song,
  onSuccess,
  onError,
}: {
  artist: string;
  song: string;
  onSuccess: () => void;
  onError: (value: boolean) => void;
}) => {
  return async (dispatch: Dispatch<LyricsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const { payload, error } = await requestLyric(artist, song);
      dispatch({ type: SET_LYRICS, payload, error });
      dispatch({ type: SET_LOADING, payload: false });
      if (error !== '') {
        onError(true);
      } else {
        onSuccess();
        addLyricsToHistoryData({ artist, lyrics: payload, song });
      }
    } catch (error) {
      dispatch({ type: SET_LYRICS, payload: '', error });
      dispatch({ type: SET_LOADING, payload: false });
      console.log(error);
      onError(true);
    }
  };
};
