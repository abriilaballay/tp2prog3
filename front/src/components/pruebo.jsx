import { useEffect, useState } from "react";
import "./estilos/pruebo.css";
import { Link } from "react-router-dom";
import MenuAjuestes from "./dropdown";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Pruebo = () => {
  const [partidos, setPartidos] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
  const [MostrarPartido, setMostrarPartido] = useState(true);
  const [MostrarJugadores, setMostraJugadores] = useState(false);

  useEffect(() => {
    const fetchPartidos = async () => {
      const url = `https://v3.football.api-sports.io/fixtures?season=${2024}&league=${9}&team=${26}`;
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-apisports-key': "df7f9445ad92a7e739b1487f9870452f",
            'x-rapidapi-host': "v3.football.api-sports.io"
          }
        });
        const respuesta = await response.json();
        setPartidos(respuesta.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPartidos();
  }, []);

  useEffect(() => {
    const fetchJugadores = async () => {
      const url = `https://v3.football.api-sports.io/players?season=${2024}&league=${9}&team=${26}`;
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-apisports-key': "df7f9445ad92a7e739b1487f9870452f",
            'x-rapidapi-host': "v3.football.api-sports.io"
          }
        });
        const respuesta = await response.json();
        setJugadores(respuesta.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchJugadores();
  }, []);

  const mostrar_Partidos = () => {
    setMostrarPartido(!MostrarPartido);
    if (MostrarJugadores) {
      setMostraJugadores(false);
    }
  };

  const mostrar_jugadores = () => {
    setMostraJugadores(!MostrarJugadores);
    if (MostrarPartido) {
      setMostrarPartido(false);
    }
  };

  const mostrarEstadisticasJugador = (jugador) => {
    setJugadorSeleccionado(jugador);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="header">
        <MenuAjuestes />
        <Link className="button" to="/">
          home
        </Link>
        <button className="button" onClick={mostrar_Partidos}>
          {MostrarPartido ? "Ocultar " : "Mostrar"} Partido
        </button>
        <button className="button" onClick={mostrar_jugadores}>
          {MostrarJugadores ? "Ocultar " : "Mostrar "} jugadores
        </button>
      </header>

      <div className="column_Act">
        <div className="column">
          <div>
            {MostrarPartido && (
              partidos.length > 0 ? (
                <div>
                  {partidos.map(partido => (
                    <div key={partido.fixture.id} className="partido">
                      <div className="team">
                        <img src={partido.teams.home.logo} alt={`${partido.teams.home.name} logo`} className="team-logo" />
                        <span className="team-name">{partido.teams.home.name}</span>
                      </div>
                      <span className="vs"> {partido.goals.home} vs {partido.goals.away}</span>
                      <div className="team">
                        <img src={partido.teams.away.logo} alt={`${partido.teams.away.name} logo`} className="team-logo" />
                        <span className="team-name">{partido.teams.away.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Cargando partidos...</p>
              )
            )}

            {MostrarJugadores && (
              jugadores.length > 0 ? (
                <div>
                  <h2> Argetina copa america Jugadores</h2>
                  <table className="mi-tabla">
                    <thead>
                      <tr className="table-dark">
                        <th scope="col">Nombre</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jugadores.map(jugador => (
                        <tr key={jugador.player.id}>
                          <td>{jugador.player.name}</td>
                          <td>
                            <button onClick={() => mostrarEstadisticasJugador(jugador)}>
                              Estadística
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              ) : (
                <p>Cargando jugadores...</p>
              )
            )}
          </div>
        </div>

        <div className="column">
          {jugadorSeleccionado && (
            <div className="jugador-info">
              <div className=" column_Jugador">
                <div>
                  <img src={jugadorSeleccionado.player.photo} alt={jugadorSeleccionado.player.name} className="jugador-logo" />
                </div>
                <div>
                  <p><strong>Nombre:</strong> {jugadorSeleccionado.player.firstname}</p>
                  <p><strong>Apellido:</strong> {jugadorSeleccionado.player.lastname}</p>
                  <p><strong>Nacionalidad:</strong> {jugadorSeleccionado.player.nationality}</p>
                  <p><strong>Nacimiento:</strong> {jugadorSeleccionado.player.birth.date} ({jugadorSeleccionado.player.age})</p>
                  <p><strong>Altura:</strong> {jugadorSeleccionado.player.height}</p>
                  <p><strong>Altura:</strong> {jugadorSeleccionado.player.weight}</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pruebo;