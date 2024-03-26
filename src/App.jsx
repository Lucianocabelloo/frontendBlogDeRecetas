import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/pages/Administrador";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import RecetasForm from "./components/pages/recetas/RecetasForm";
import Login from "./components/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route exact path="/administrador/crear" element={<RecetasForm titulo="Nueva Receta" editar={false}></RecetasForm>}></Route>
        <Route exact path="/administrador/editar/:id" element={<RecetasForm titulo="Editar Receta" editar={true}></RecetasForm>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route path="/login/" element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
