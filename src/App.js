import React from 'react';

import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound';
//styles
import {GlobalStyle} from './GlobalStyle'

//Routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:movieId" element={<Movie/>} />
        <Route path="/*" element= {<NotFound/>} />
      </Routes>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
