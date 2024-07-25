// src/components/AddScorePopup.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/leaderboardSlice';
import './AddScorePopup.css';

const AddScorePopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');

  const dispatch = useDispatch();

  const handleAddScore = () => {
    if (username && score.match(/^\d{2}:\d{2}:\d{3}$/)) {
      dispatch(addScore({ username, score }));
      onClose();
    } else {
      alert('Please enter a valid score format (MM:SS:MMM)');
    }
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Add Score</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Score (MM:SS:MMM)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button onClick={handleAddScore}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddScorePopup;
