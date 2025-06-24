import { useState } from 'react';
import './App.css';

export default function VotingApp() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Vote Your Favorite Language</h1>
        <ul className="language-list">
          {languages.map((lang, index) => (
            <li key={index} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className="vote-count">{lang.votes}</span>
              <button className="vote-button" onClick={() => handleVote(index)}>Vote</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
