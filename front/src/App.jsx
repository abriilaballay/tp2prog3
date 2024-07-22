import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import Gallery from "./components/galerry";
import Detalles from "./components/detallesCuentas";

function App() {
return (

    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/detalles" element={<Detalles />} />
      </Routes>
    </Router>

);}

export default App;
