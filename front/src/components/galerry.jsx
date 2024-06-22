import { useState } from "react";
import { jugadores } from "../jugadores/jugadores";
import "./estilos/gallery.css";
import { Link } from "react-router-dom";

export default function Gallery() {
    let [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    let jugador = jugadores[index];

    let anterior = index > 0;
    let sigue = index < jugadores.length - 1;

    function handleSiguiente() {
        setIndex(index + 1);
    }

    function handleAnterior() {
        setIndex(index - 1);
    }

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="header">
                <button
                    className="button"
                    onClick={handleAnterior}
                    disabled={!anterior}
                >
                    Anterior
                </button>
                <Link className="button" to="/">
                    {" "}
                    home{" "}
                </Link>
                <button className="button" onClick={handleSiguiente} disabled={!sigue}>
                    Siguiente
                </button>
            </header>
            <div className="column">
                <div className="player-details">
                    <section>
                        <div className="player-info">
                            <p>
                                <strong>Nombre:</strong> {jugador.nombre}
                            </p>
                            <p>
                                <strong>Posición:</strong> {jugador.posicion}
                            </p>
                            <p>
                                <strong>Tarjetas Amarillas:</strong> {jugador.amarillas}
                            </p>
                            <p>
                                <strong>Tarjetas Rojas:</strong> {jugador.rojas}
                            </p>
                            <p>
                                <strong>Goles:</strong> {jugador.goles}
                            </p>
                            <p>
                                <strong>Minutos Jugados:</strong> {jugador.minutos}
                            </p>
                        </div>
                    </section>
                    <section>
                        <img className="player-image" src={jugador.url} alt={jugador.alt} />
                    </section>
                </div>

                <div className="player-details">
                    <h1>estadisctica</h1>
                </div> 
            </div>
            <h3 className="player-counter">
                ({index + 1} de {jugadores.length})
            </h3>
            <button className="button" onClick={handleShowMore}>
                {" "}
                {showMore ? "Ocultar" : "Mostrar"} Detalles
            </button>
            {showMore && <p className="player-description">{jugador.descripcion}</p>}
        </div>
    );
}
