
import React, { useState } from 'react';
import './lyricsForm.css';

export default function LyricsForm({ onSearch, setToast }) {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artist && title) {
      onSearch(artist, title);
      setToast({ type: 'info', message: `"${artist} - ${title}" şarkı sözleri aranıyor...`});
    }else{
      setToast({type: 'error', message: 'Lütfen sanatçı ve şarkı adı giriniz.'});
    }
  };

  const handleSuggestedClick = (suggestedArtist, suggestedTitle) => {
    setArtist(suggestedArtist);
    setTitle(suggestedTitle);
  };

  return (
    <form onSubmit={handleSubmit} className="lyrics-form">
      
      <div className='column'>
        <div className="row">
          <label htmlFor="artist" className="lyrics-label">Sanatçı:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="lyrics-input"
            placeholder="Sanatçı adı giriniz"
          />
        </div>
        <div className="row">
          <label htmlFor="title" className="lyrics-label">Şarkı Adı:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="lyrics-input"
            placeholder="Şarkı adı giriniz"
          />
        </div> 
      </div>

      <div className="onerilenler">
        <p className="onerilenler-text">Önerilen Şarkılar:</p>
        <ul className="onerilenler-list">
          <li className="onerilenler-item"
            onClick={() => handleSuggestedClick('Adele', 'Hello')}
          >Adele - Hello</li>
          <li className="onerilenler-item"
            onClick={() => handleSuggestedClick('Queen', 'Bohemian Rhapsody')}
          >Queen -	Bohemian Rhapsody</li>

          <li className="onerilenler-item"
            onClick={() => handleSuggestedClick('Eminem', 'Lose Yourself')}
          >Eminem - Lose Yourself</li>

          <li className="onerilenler-item"
            onClick={() => handleSuggestedClick('Ed Sheeran', 'Perfect')}
          >Ed Sheeran - Perfect</li>
        </ul>
      </div>

      <div className="">
        <button type="submit" className="lyrics-button">
          Şarkı Sözlerini Bul
        </button>
      </div>
    </form>
  );
}