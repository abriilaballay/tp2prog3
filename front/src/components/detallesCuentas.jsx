import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./estilos/detalle.css";
import Actualizar from "./Actualizar";
import GetUserId from "./token";

const Detalles = () => {
    const [usuarios, setUsuarios] = useState(null);
    const [error, setError] = useState(null);
    const userId = GetUserId();
    const navigate = useNavigate();

    const MostrarInfomacion = async () => {
        try {
            const response = await fetch(`http://localhost:8000/users/${userId}`, {
                method: "GET",
                credentials: 'include', // Esto asegura que las cookies se envíen con la solicitud
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                if (response.status === 401) {
                    setError('No autorizado. Por favor, inicie sesión nuevamente.');
                } else {
                    setError(`Error: ${response.statusText}. ${errorText}`);
                }
                return;
            }

            const respuesta = await response.json();
            setUsuarios(respuesta); // Guarda la respuesta en el estado
        } catch (error) {
            setError('Error al obtener la información del usuario.');
        }
    };
    const eliminar = async () => {
        try {
            const response = await fetch(`http://localhost:8000/users/${userId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${yourToken}` // Asegúrate de agregar el token si es necesario
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.statusText}. ${errorText}`);
            }

            const respuesta = await response.json();
            alert(respuesta.message);
            navigate('/'); // Redirecciona a la página principal al eliminar el usuario
        } catch (error) {
            alert("Error al eliminar el usuario: " + error.message);
        }
    };

    useEffect(() => {
        MostrarInfomacion(); // Llama a la función cuando el componente se monte
    }, []); // Dependencias vacías significan que se ejecuta solo una vez al montar

    if (error) {
        return <div>Error: {error}</div>; // Mostrar el error si ocurre
    }

    if (!usuarios) {
        return <div>Cargando...</div>; // Mostrar un mensaje mientras se carga la información
    }

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="header">
                <a className="flex items-center justify-center" href="#"></a>
                <nav className="nav">
                    <Link to="/gallery" className="button">home</Link>
                </nav>

            </header>
            <div className="column_Act">
                <div className="actualizar_div">
                    <Actualizar />
                </div>
                <div className="Informacion">
                    <h2 className="h2_titulo"><strong>Información de la Cuenta</strong></h2>
                    <p>Nombre de Usuario: {usuarios.nombreUsuario}</p>
                    <p>Email: {usuarios.gmail}</p>
                    <button className="boton_eliminar" onClick={eliminar}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default Detalles;
