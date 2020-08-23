import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const getLyricsByArtistAndSong = ({ artist, song }: { artist: string; song: string }) =>
  encodeURI(`${API_URL}${artist}/${song}`);
