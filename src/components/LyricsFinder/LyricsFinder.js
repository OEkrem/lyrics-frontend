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
    setToast(null);

    const result = await fetchLyrics(artist, title);
    if (result === "Şarkı sözleri bulunamadı.") {
      setToast({ type: 'error', message: result });
    } else if (result === "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.") {
      setToast({ type: 'error', message: result });
    } else {
      setLyrics(result);
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
        <div className='govde'>
          <LyricsForm onSearch={handleSearch} setToast={setToast} />
          <LyricsDisplay lyrics={lyrics}/>
        </div>
       

    </div>
  );
}