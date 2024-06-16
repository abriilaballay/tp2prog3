import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
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
                </p>
                <a className="button" href="#">Ver Gallery de fotos</a>
                </div>
                <img
                src="https://www.lanacion.com.ar/resizer/Vhw_tuyCLnsIlrC01HnFog65Qxk=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OAMAYC4IP5HSPKBA2VCRGUETNE.JPG"
                width="550"
                height="550"
                alt="Argentina Campeona"
                className="image"
                />
            </div>
            </section>
            <section className="section section--dark">
            <div className="container">
    
    
    
    
    <img
        src="https://www.tubewp.com/wp-content/uploads/2022/12/messi-world-cup-trophy-wallpapers-5.jpg"
        width="550"
        height="310"
        alt="Image"
        className="image"
    />
    
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
            </li>
        </ul>
    </div>
</div>
            </section>
        </main>




        <footer className="footer">
            <p className="footer-text">© 2024 Acme Inc. Todos os direitos reservados.</p>
            <nav className="footer-nav">
            <a className="footer-link" href="#">
                Contactos 
            </a>
            </nav>
        </footer>
        </div>
    );
};

export default Home;





