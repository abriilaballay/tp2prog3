import React, { useState } from 'react';
import "./estilos/login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {

  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: 'include'
      });

    console.log('Response status:', response.status); // Verifica el estado de la respuesta
    console.log('Response text:', await response.text()); // Verifica el contenido de la respuesta
    if (response.ok) {
      console.log('Redirigiendo a /gallery');
      navigate('/gallery');
    }
    } catch (error) {
      alert("Error registrando usuario: " + error.message);
    }
  };



  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="header">
        <a className="flex items-center justify-center" href="#"></a>
        <nav className="nav">
          <Link to="/" className="nav-link">home</Link>
        </nav>
      </header>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Inicio de Sesión</h2>
          <div>

            <input
              className="register-input"
              placeholder="Email"
              {...register("gmail", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.gmail?.type === "required" && <p>El campo es requerido</p>}
            {errors.gmail?.type === "pattern" && (
              <p>El formato de email no es correcto</p>
            )}
          </div>
          <div>
            <input
              className="register-input"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <p>La Contrasña debe tener 1 Mayusculo, 1 minusdcula y  mas de 8 caracteres</p>
            )}
            {errors.password?.type === "required" && <p>El campo es requerido</p>}
          </div>
          <button className="login-button" type="submit">Iniciar Sesión</button>
          <p className="register-text">¿Todavía no tienes sesión? Presiona <Link to='/register'>aquí</Link> para registrarte.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;