import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./recetas/ItemReceta";
import { useEffect, useState } from "react";
import { obtenerRecetasAPI } from "../../helpers/queries";
import Menu from "../common/Menu"
import Swal from "sweetalert2";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() =>{
    obtenerRecetas();
  }, [])

  const obtenerRecetas = async () =>{
    const respuesta = await obtenerRecetasAPI();
    if(respuesta.status === 200){
      const datos = await respuesta.json();
      setRecetas(datos);
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error"
      });
    }
  }
  
  return (
    <>
    <Container className="my-4 mainContainer">
      <Row className="align-items-center justify-content-sm-center">
        <Col md="8">
          <h1 className="display-3">Recetas Disponibles</h1>
          <hr />
        </Col>
        <Col md="4" className="text-md-end text-center">
          <Link className="btn btn-primary" to="/administrador/crear">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </Col>
      </Row>
      <Table responsive striped hover bordered className="my-4">
        <thead className="text-center">
          <th>Cod</th>
          <th>Receta</th>
          <th>Duración</th>
          <th>URL de imagen</th>
          <th>Autor</th>
          <th>Opciones</th>
        </thead>
        <tbody>
          {recetas.map((receta) => <ItemReceta key={receta._id} receta={receta} setRecetas={setRecetas}></ItemReceta>)}
        </tbody>
      </Table>
    </Container>
    </>
  );
};

export default Administrador;