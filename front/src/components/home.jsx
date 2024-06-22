import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
<<<<<<< HEAD
        <div className="">
            <header className="header">
                <a className="flex items-center justify-center" href="#">
                </a>
                <nav className="nav">
                    <Link to="/login" className="nav-link">Iniciar Sesión</Link>
                </nav>
            </header>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10'>
                    <div className=" flex flex-col space-y-4 " >
                        <h1 className="text-2xl font-bold text-blue-500">
                            Argentina, Campeona del Mundo 2022
                        </h1>
                        <p className="">
                            La selección de Argentina se consagró campeona del mundo en la Copa Mundial de la FIFA 2022, celebrada
                            en Qatar. Liderados por Lionel Messi, los albicelestes lograron su tercera estrella tras vencer a
                            Francia en una final épica. <br />
                            Acá podés ver más información de los jugadores como también las estadísticas
                        </p>
                        {/* <a className="button"> <Link to="/login" className="nav-link">Ver Estadistica de jugadores</Link></a> */}
                        
                         <Link to="/login" className="button">Ver Estadistica de jugadores</Link>
                    </div>
                    <div>
                        <img
                            src="https://www.lanacion.com.ar/resizer/Vhw_tuyCLnsIlrC01HnFog65Qxk=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OAMAYC4IP5HSPKBA2VCRGUETNE.JPG"
                            alt="Argentina Campeona"
                            className=""
                        />
                    </div>
        </div>
=======
        <div className="flex flex-col min-h-[100dvh]">
        <header className="header">
            <a className="flex items-center justify-center" href="#">
            </a>
            <nav className="nav">
            <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            </nav>
        </header>



        <main className="flex-1">
            <section className="section">
            <div className="container">
                <div className="content">
                <h1 className="title">
                    Argentina, Campeona del Mundo 2022
                </h1>
                <p className="description">
                    La selección de Argentina se consagró campeona del mundo en la Copa Mundial de la FIFA 2022, celebrada
                    en Qatar. Liderados por Lionel Messi, los albicelestes lograron su tercera estrella tras vencer a
                    Francia en una final épica.
                    aca podas ver las Estadisctica de cada jugador
                </p>
                <a className="button" href="#">Ver Estadisctica de los juegadores </a>
>>>>>>> 19dfa77c799144167cc6a8ede2eb15f154c27abe
                </div>
            </section>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10'>
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
                                        <h3 className="feature-title">22 de noviembre, Fase de grupos - Argentina vs Arabia Saudí</h3>
                                        <p className="feature-description">
                                            Marcador: 1-2
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">25 de noviembre, Fase de grupos - Argentina vs México</h3>
                                        <p className="feature-description">
                                            Marcador: 2-0
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">

                                    <div>
                                        <h3 className="feature-title">29 de noviembre, Fase de grupos - Argentina vs Polonia</h3>
                                        <p className="feature-description">
                                            Marcador: 2-0
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">3 de diciembre, Octavos - Argentina vs Australia</h3>
                                        <p className="feature-description">
                                            Marcador: 2-1
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">9 de diciembre, Cuartos - Argentina vs Países Bajos</h3>
                                        <p className="feature-description">
                                            Marcador: 2-2 en penaltis (4-3)
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">

                                    <div>
                                        <h3 className="feature-title">13 de diciembre, Semifinales - Argentina vs Croacia</h3>
                                        <p className="feature-description">
                                            Marcador: 3-0
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">18 de diciembre, Final - Argentina vs Francia</h3>
                                        <p className="feature-description">
                                            Marcador: 3-3. Victoria en penaltis (4-2)
                                        </p>
                                    </div>
                                </li><br />
                            </ul>

                    </div>

                </div>
            </section>

            {/* <main className="flex-1">
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1 className="title">
                                Argentina, Campeona del Mundo 2022
                            </h1>
                            <p className="description">
                                La selección de Argentina se consagró campeona del mundo en la Copa Mundial de la FIFA 2022, celebrada
                                en Qatar. Liderados por Lionel Messi, los albicelestes lograron su tercera estrella tras vencer a
                                Francia en una final épica.
                                Aca podes ver mas infomracion de los jugadores como las Estadistica
                            </p>
                            <a className="button" href="#">Ver Estadistica de jugadores</a>
                        </div>
                        <img
                            src="https://www.lanacion.com.ar/resizer/Vhw_tuyCLnsIlrC01HnFog65Qxk=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OAMAYC4IP5HSPKBA2VCRGUETNE.JPG"
                            alt="Argentina Campeona"
                            className="image"
                        />
                    </div>
                </section>
                <section className="section section--dark">
                    <div className="container">


                        <div className="content">
                            <h2 className="title">
                                Resultados de Argentina para consagrarse campeón
                            </h2>
                            <ul className="features">
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">22 de noviembre, fase de grupos - Argentina vs Arabia Saudí</h3>
                                        <p className="feature-description">
                                            Marcador: 1-2
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">25 de noviembre, fase de grupos - Argentina vs México</h3>
                                        <p className="feature-description">
                                            Marcador: 2-0
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">

                                    <div>
                                        <h3 className="feature-title">29 de noviembre, fase de grupos - Argentina vs Polonia</h3>
                                        <p className="feature-description">
                                            Marcador: 2-0
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">3 de diciembre, octavos - Argentina vs Australia</h3>
                                        <p className="feature-description">
                                            Marcador: 2-1
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">9 de diciembre, cuartos - Argentina vs Países Bajos</h3>
                                        <p className="feature-description">
                                            Marcador: 3-4 en penaltis (2-2)
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">

                                    <div>
                                        <h3 className="feature-title">13 de diciembre, semifinales - Argentina vs Croacia</h3>
                                        <p className="feature-description">
                                            Marcador: 3-0
                                        </p>
                                    </div>
                                </li>
                                <li className="feature">
                                    <div>
                                        <h3 className="feature-title">18 de diciembre, final - Argentina vs Francia</h3>
                                        <p className="feature-description">
                                            Marcador: 3-3. Victoria en penaltis (4-2)
                                        </p>
                                    </div>
                                </li><br />
                            </ul>
                            <img
                                src="https://www.tubewp.com/wp-content/uploads/2022/12/messi-world-cup-trophy-wallpapers-5.jpg"
                                alt="Image"
                                className="image2"
                            />
                        </div>
                    </div>
                </section>
            </main> */}

        </div>
    );
};

export default Home;











