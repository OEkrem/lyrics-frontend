

import api from './apiClient';

export const fetchLyrics = async (artist, title) => {
    try {
        const response = await api.get(`/${artist}/${title}`);
        return response.data.lyrics;
    } catch (error) {
        if (error.response) {
            if (error.response && error.response.status === 404) {
                return "Şarkı sözleri bulunamadı.";
            }
        }
        console.error("Şarkı sözleri alınırken bir hata oluştu:", error);
        return "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
    }
};