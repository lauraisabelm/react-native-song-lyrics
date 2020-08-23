// RESOURCES
import { SET_LOADING, SET_LYRICS, LyricsActionTypes } from '../actions/types';

export interface LyricsState {
  error: string;
  loading: boolean;
  lyrics: string;
}

const initialState: LyricsState = {
  error: '',
  loading: false,
  lyrics: '',
};

const lyrics = (state = initialState, action: LyricsActionTypes): LyricsState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_LYRICS:
      return {
        ...state,
        error: action.error,
        lyrics: action.payload,
      };
    default:
      return state;
  }
};

export default lyrics;
