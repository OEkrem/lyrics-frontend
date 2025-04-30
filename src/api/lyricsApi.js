

import api from './apiClient';

const url = '/artist/title';

export const fetchLyrics = async (artist, title) => {
    try {
        const params = {
            artist: artist,
            title: title,
          };
          if (artist) params.artist = artist;
          if (title) params.title = title;
          
        const response = await api.get(url, {params});
        return response.lyrics;

    } catch (error) {
        console.error("Error fetching lyrics:", error);
        return null;
    }
};
