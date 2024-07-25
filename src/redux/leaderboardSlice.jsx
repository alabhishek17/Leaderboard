// src/redux/leaderboardSlice.js

import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    scores: [
      { username: 'Player1', score: '05:23:200' },
      { username: 'Player2', score: '03:45:100' },
      { username: 'Player3', score: '04:12:150' },
    ],
  },
  reducers: {
    addScore: (state, action) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.score.localeCompare(b.score));
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
