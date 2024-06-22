import React from "react";
import "./estilos/home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="header">
                <h3> Estadistica Argentina Mundial</h3>
                <a className="flex items-center justify-center" href="#"></a>
                <nav className="nav">
                    <Link to="/login" className="nav-link">
                        Iniciar Sesión
                    </Link>
                </nav>
            </header>
            <main className="flex-1">

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10">
                        <div className=" flex flex-col space-y-4">
                            <h1 className="title">Argentina, Campeona del Mundo 2022</h1>
                            <p className="description">
                                La selección de Argentina se consagró campeona del mundo en la
                                Copa Mundial de la FIFA 2022, celebrada en Qatar. Liderados por
                                Lionel Messi, los albicelestes lograron su tercera estrella tras
                                vencer a Francia en una final épica. <br /> 
                                <strong>Aca podas ver lasEstadisctica de cada jugador</strong>
                            </p>
                            <Link to="/login" className="button">
                                Iniciar Sesión
                            </Link>
                        </div>
                        <div>
                            <img
                                src="https://www.lanacion.com.ar/resizer/Vhw_tuyCLnsIlrC01HnFog65Qxk=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OAMAYC4IP5HSPKBA2VCRGUETNE.JPG"
                                alt="Argentina Campeona"
                                className=""
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10">
                        <div>
                            <img
                                src="https://www.tubewp.com/wp-content/uploads/2022/12/messi-world-cup-trophy-wallpapers-5.jpg"
                                alt="Argentina Campeona"
                                className=""
                            />
                        </div>

                        <div className=" flex flex-col space-y-4">
                            <h1 className="text-">
                                Resultados de Argentina para consagrarse campeón
                            </h1>
                            <ul className="features">
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">
                                            22 de noviembre, Fase de grupos - Argentina vs Arabia
                                            Saudí
                                        </h3>
                                        <p className="feature-description">Marcador: 1-2</p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">
                                            25 de noviembre, Fase de grupos - Argentina vs México
                                        </h3>
                                        <p className="feature-description">Marcador: 2-0</p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">
                                            29 de noviembre, Fase de grupos - Argentina vs Polonia
                                        </h3>
                                        <p className="feature-description">Marcador: 2-0</p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">
                                            3 de diciembre, Octavos - Argentina vs Australia
                                        </h3>
                                        <p className="feature-description">Marcador: 2-1</p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">
                                            9 de diciembre, Cuartos - Argentina vs Países Bajos
                                        </h3>
                                        <p className="feature-description">
                                            Marcador: 2-2 en penaltis (4-3)
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">
                                            13 de diciembre, Semifinales - Argentina vs Croacia
                                        </h3>
                                        <p className="feature-description">Marcador: 3-0</p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">
                                            18 de diciembre, Final - Argentina vs Francia
                                        </h3>
                                        <p className="feature-description">
                                            Marcador: 3-3. Victoria en penaltis (4-2)
                                        </p>
                                    </div>
                                </li>
                                <br />
                            </ul>
                        </div>
                    </div>
                </section>
            </main>{" "}
        </div>
    );
};

export default Home;
