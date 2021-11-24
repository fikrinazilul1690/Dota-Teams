import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import MainActivity from './pages/MainActivity';
import PlayersActivity from './pages/PlayersActivity';
import Footer from './component/Footer/Footer';
import LeaderboardActivity from './pages/LeaderboardActivity';
import RecentMatchesActivity from './pages/RecentMatchesActivity';
import AboutActivity from './pages/AboutActivity';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate to="/teams" />} />
          <Route path="/teams" element={<MainActivity />} />
          <Route exact path="/teams/players/:id" element={<PlayersActivity />} />
          <Route exact path="/teams/matches/:id" element={<RecentMatchesActivity />} />
          <Route exact path="/leaderboard" element={<LeaderboardActivity />} />
          <Route exact path="/profile" element={<AboutActivity />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
