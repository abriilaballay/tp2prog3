import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import GetUserId from './token'; // Importa tu función para obtener el ID del usuario

const PrivateRoute = () => {
  const userId = GetUserId(); // Verifica si el usuario está autenticado

  return userId ? <Outlet /> : <Navigate to="/login" />; // Renderiza los componentes hijos si está autenticado, de lo contrario redirige a /login
};

export default PrivateRoute;