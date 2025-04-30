
import React from 'react';
import './lyricsDisplay.css';

export default function LyricsDisplay({ lyrics }) {

  if (!lyrics) {
    return null; // Şarkı sözleri yoksa hiçbir şey gösterme
  }

  return (
    <div className="lyrics-display-container">
      <h2 className="baslik">Şarkı Sözleri:</h2>
      <pre className="sozler">{lyrics}</pre>
    </div>
  );
}