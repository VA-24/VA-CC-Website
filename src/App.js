import './App.css';
import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/services' element={<Services />}/>
      </Routes>
    </Router>
  );
}

export default App;