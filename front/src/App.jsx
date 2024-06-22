import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home'
import Gallery from './components/galerry'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
    </Router>
  );
}

export default App;

