// src/App.js

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import Footer from './components/Footer';
// import './styles.css';
import "./App.css"

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Provider store={store}>
      <div className="app-container">
        <Leaderboard />
        <button className="add-score-button" onClick={() => setShowPopup(true)}>
          Add Score
        </button>
        {showPopup && <AddScorePopup onClose={() => setShowPopup(false)} />}
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
