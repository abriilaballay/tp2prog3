import React, { useRef } from "react";
import "./estilos/register.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const respuesta = await response.json();
      alert(respuesta.message);
      if (response.ok) {
        navigate('/login');
      }

    } catch (error) {
      alert("Error registrando usuario: " + error.message);
    }
  };

  return (
    <>
      <header className="header">
        <a className="flex items-center justify-center" href="#"></a>
        <nav className="nav">
          <Link to="/" className="nav-link">
            home
          </Link>
        </nav>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h2>Registro</h2>

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
            type="text"
            placeholder="Nombre De usuario"
            {...register("nombreUsuario", {
              required: true,
            })}
          />
          {errors.nombreUsuario?.type === "required" && (
            <p>El campo es requerido</p>
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
            <p>La Contrasña debe tener 1 Mayusculo, 1 minusdcula y mas de 8 caracteres</p>
          )}
          {errors.password?.type === "required" && <p>El campo es requerido</p>}
        </div>

        <button type="submit" className="button">Registrar</button>
        <p className="register-text">¿Ya Creaste tu cuenta ? Presiona <Link to='/login'>aquí</Link> para inicias secion.</p>
      </form>

    </>
  );
};

export default Register;
