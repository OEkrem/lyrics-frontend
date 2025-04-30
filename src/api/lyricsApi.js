

import api from './apiClient';

export const fetchLyrics = async (artist, title) => {
    try {
        const response = await api.get(`/${artist}/${title}`);
        return response.data.lyrics;
    } catch (error) {
        //console.error("Error fetching lyrics:", error);
        return null;
    }
};