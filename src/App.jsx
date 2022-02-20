import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Actor from './pages/Actor';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Movie from './pages/Movie';
import Search from './pages/Search';
import './app.scss'


function App() {
  return (
<BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/movie/:id" element={<Movie />}/>
            <Route path="/actor/:userId" element={<Actor />}/> 
            <Route path="/liked" element={<Liked />}/> 
          </Routes>
    </BrowserRouter>
  );
}

export default App;
