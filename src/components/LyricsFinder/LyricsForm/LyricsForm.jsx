import React, { useContext, useState } from "react";
import "./lyricsForm.css";
import { ThemeContext } from "../../../context/ThemeContext";

export default function LyricsForm({ onSearch, setToast }) {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const { darkMode } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artist && title) {
      onSearch(artist, title);
      setToast({
        type: "info",
        message: `"${artist} - ${title}" şarkı sözleri aranıyor...`,
      });
    } else {
      setToast({
        type: "error",
        message: "Lütfen sanatçı ve şarkı adı giriniz.",
      });
    }
  };

  const handleSuggestedClick = (suggestedArtist, suggestedTitle) => {
    setArtist(suggestedArtist);
    setTitle(suggestedTitle);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={darkMode ? "lyrics-form dark-mode" : "lyrics-form light-mode"}
    >
      <div className="form-group">
        <label htmlFor="artist" className="lyrics-label">
          Sanatçı:
        </label>
        <input
          type="text"
          id="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="lyrics-input"
          placeholder="Sanatçı adı giriniz"
        />
      </div>
      <div className="form-group">
        <label htmlFor="title" className="lyrics-label">
          Şarkı Adı:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="lyrics-input"
          placeholder="Şarkı adı giriniz"
        />
      </div>
      <div className="suggestions">
        <p className="suggestions-title">Önerilen Şarkılar:</p>
        <ul className="suggestions-list">
          <li
            className="suggestions-item"
            onClick={() => handleSuggestedClick("Adele", "Hello")}
          >
            Adele - Hello
          </li>
          <li
            className="suggestions-item"
            onClick={() => handleSuggestedClick("Queen", "Bohemian Rhapsody")}
          >
            Queen - Bohemian Rhapsody
          </li>
          <li
            className="suggestions-item"
            onClick={() => handleSuggestedClick("Eminem", "Lose Yourself")}
          >
            Eminem - Lose Yourself
          </li>
          <li
            className="suggestions-item"
            onClick={() => handleSuggestedClick("Ed Sheeran", "Perfect")}
          >
            Ed Sheeran - Perfect
          </li>
        </ul>
      </div>
      <button type="submit" className="lyrics-button">
        Ara
      </button>
    </form>
  );
}
