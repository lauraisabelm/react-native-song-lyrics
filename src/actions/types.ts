export const SET_LOADING = 'SET_LOADING';
export const SET_LYRICS = 'SET_LYRICS';

interface setLyricsAction {
  type: typeof SET_LYRICS;
  payload: string;
  error: string;
}

interface setLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type LyricsActionTypes = setLyricsAction | setLoading;
