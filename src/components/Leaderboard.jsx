// src/components/Leaderboard.js

import React from 'react';
import { useSelector } from 'react-redux';
import { FaTrophy } from 'react-icons/fa';
import './Leaderboard.css';

const Leaderboard = () => {
  const scores = useSelector((state) => state.leaderboard.scores);

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard <FaTrophy /></h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.slice(0, 10).map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
