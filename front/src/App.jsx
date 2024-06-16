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
        <Route path="/login" element={<Login />} /> {/* Agrega una ruta para "/login" si tienes un componente de inicio de sesión */}
        <Route path="/" element={<Home />} /> {/* Agrega una ruta para "/" con un componente Home, por ejemplo */}
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
    </Router>
  );
}

export default App;

