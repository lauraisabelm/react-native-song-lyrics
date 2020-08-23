// RESOURCES
import { getLyricsByArtistAndSong } from './endpoints';

export const requestLyric = async (artist: string, song: string) => {
  try {
    const response = await fetch(getLyricsByArtistAndSong({ artist, song }));
    const parsedResponse = await response.json();
    if (response.status === 200) {
      return { error: '', payload: parsedResponse.lyrics };
    }
    return { error: parsedResponse.error, payload: '' };
  } catch (err) {
    console.log(`Unable to get the lyrics from the database: ${err}`);
    return { error: err, payload: '' };
  }
};
