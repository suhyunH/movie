import React from 'react'
import {BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Actor from './pages/Actor';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Movie from './pages/Movie';
import Search from './pages/Search';
import './app.scss'


function App() {
  return (
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/movie/:id" element={<Movie />}/>
            <Route path="/actor/:userId" element={<Actor />}/> 
            <Route path="/liked" element={<Liked />}/> 
          </Routes>
  );
}

export default App;
