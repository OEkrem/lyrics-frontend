import React, { useState } from 'react';
import { fetchLyrics } from '../../api/lyricsApi';
import LyricsForm from './LyricsForm/LyricsForm';
import LyricsDisplay from './LyricsDisplay/LyricsDisplay';
import './lyricsFinder.css';

export default function LyricsFinder() {
  const [lyrics, setLyrics] = useState('');

  const handleSearch = async (artist, title) => {
    setLyrics('');

    try {
      const fetchedLyrics = await fetchLyrics(artist, title);
      if (fetchedLyrics) {
        setLyrics(fetchedLyrics);
      } else {
        
      }
    } catch (err) {
      
    }
  };

  return (
    <div className='lyrics-finder-container'>
      <h1 className="baslik">Şarkı Sözü Bulucu</h1>
      <LyricsForm onSearch={handleSearch} />
      <LyricsDisplay lyrics={lyrics}/>
    </div>
  );
}