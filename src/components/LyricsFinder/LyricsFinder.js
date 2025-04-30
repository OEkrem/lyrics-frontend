import React, { useState } from 'react';
import { fetchLyrics } from '../../api/lyricsApi';
import LyricsForm from './LyricsForm/LyricsForm';
import LyricsDisplay from './LyricsDisplay/LyricsDisplay';
import Toast from '../Toast/Toast';
import './lyricsFinder.css';

export default function LyricsFinder() {
  const [lyrics, setLyrics] = useState('');
  const [toast, setToast] = useState(null);

  const handleSearch = async (artist, title) => {
    setLyrics('');

    try {
      const fetchedLyrics = await fetchLyrics(artist, title);
      if (fetchedLyrics) {
        setLyrics(fetchedLyrics);
      } else {
        setToast({type: 'error', message: 'Şarkı sözü bulunamadı. Lütfen başka bir şarkı deneyin.'});
      }
    } catch (err) {
      setToast({type: 'error', message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'});
    }
  };

  return (
    <div className='lyrics-finder-container'>

        {/* Toast Mesajı */}
        {toast && (
            <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)} // Toast kapatıldığında state'i temizle
            />
        )}
            
        {/* Şarkı Sözü Bulucu Başlığı */}
        <h1 className="baslik">Şarkı Sözü Bulucu</h1>
        <LyricsForm onSearch={handleSearch} setToast={setToast} />
        <LyricsDisplay lyrics={lyrics}/>

    </div>
  );
}