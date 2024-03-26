import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import DetalleReceta from "./components/pages/DetalleReceta";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";
import Menu from "./components/common/Menu";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('loginRollingCoffee')) || '';
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
 <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/detalleReceta/:id" element={<DetalleReceta />} />
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin />
            </RutasProtegidas>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
