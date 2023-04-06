import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './movie/Movies';
import Podcasts from './Podcasts';
import Navbar from './Navigation';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/podcasts" Component={Podcasts} />
          <Route path="/movies" Component={MovieList} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
