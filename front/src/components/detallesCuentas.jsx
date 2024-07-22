import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./estilos/detalle.css";
import Actualizar from "./Actualizar";
import GetUserId from "./token";

const Detalles = () => {
    const [usuarios, setUsuarios] = useState(null);
    const userId = GetUserId();
    const navigate = useNavigate();
    const MostrarInfomacion = async () => {

        console.log(userId);

        try {
            const response = await fetch(`http://localhost:8000/users/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const respuesta = await response.json();
            setUsuarios(respuesta); // Guarda la respuesta en el estado
        } catch (error) {
            console.error("Error obteniendo la información del usuario:", error);
        }
    };
    const eliminar = async () =>{
        try {
            const response = await fetch(`http://localhost:8000/users/${userId}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const respuesta = await response.json();
            alert(respuesta.message);
            navigate('/'); // Redirecciona a la página principal al eliminar el usuario
        } catch (error) {
            alert("Error al eliminar el usuario: " + error.message);
        }
    }



    useEffect(() => {
        MostrarInfomacion(); // Llama a la función cuando el componente se monte
    }, []); // Dependencias vacías significan que se ejecuta solo una vez al montar

    if (!usuarios) {
        return <div>Cargando...</div>; // Mostrar un mensaje mientras se carga la información
    }


    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="header">
                <a className="flex items-center justify-center" href="#"></a>
                <nav className="nav">
                    <Link to="/" className="button">home</Link>
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
