import React from "react";
import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import RecetasForm from "../pages/recetas/RecetasForm";

export default function RutasAdmin() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
          exact
          path="/crear"
          element={
            <RecetasForm titulo="Nueva Receta" editar={false}
            ></RecetasForm>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <RecetasForm
             titulo="Editar Receta"
              editar={true}
              ></RecetasForm>
          }
        ></Route>
      </Routes>
    </>
  );
}
