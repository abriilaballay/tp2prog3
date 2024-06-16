import React, { useState } from 'react';
import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');



  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gmail, nombreUsuario, password }), // Corregido: enviar gmail, nombreUsuario y password al servidor
      });
      const data = await response.json();
      alert(data.message); // Mostrar mensaje de respuesta del servidor

    } catch (error) {
      alert('Error registrando usuario: ' + error.message);
    }
  };

  return (
    <>
      <header className="header">
              <a className="flex items-center justify-center" href="#">
              </a>
              <nav className="nav">
              <Link to="/" className="nav-link">home</Link>
              </nav>
    </header>


    <form onSubmit={handleRegister} className="register-form">
      <h2>Registro</h2>
      <input
        type="email"
        placeholder="Email"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="nombreUsuario"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  </>);
};

export default Register;

