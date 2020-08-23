// LIBS
import { Dispatch } from 'redux';

// RESOURCES
import { SET_LOADING, SET_LYRICS, LyricsActionTypes } from './types';
import { requestLyric } from '../services';

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
      }
    } catch (error) {
      dispatch({ type: SET_LYRICS, payload: '', error });
      dispatch({ type: SET_LOADING, payload: false });
      console.log(error);
      onError(true);
    }
  };
};
