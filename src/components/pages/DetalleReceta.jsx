import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerRecetaUnica } from "../../helpers/queries";

const DetalleReceta = () => {
  const [receta, setReceta] = useState()

  const {id} = useParams()

  useEffect(() => {
    cargarDatosRecetas()
  }, [])
  
  const cargarDatosRecetas = async () =>{
    const respuesta = await obtenerRecetaUnica(id)
    if(respuesta.status === 200){
      setReceta(await respuesta.json())
    }
  }

  return (
    <Container className="my-3 mainContainer">
       <Card className="w-100 d-flex align-items-center justify-content-center cardContainerReceta">
         <Row>
           <Col md={6}>
            <Card.Img
           variant="top"
               src={receta.imagen}
            />
           </Col>
           <Col md={6}>
             <Card.Body>
              <Card.Title className="primary-font">{receta.nombreReceta}</Card.Title>
              <hr />
              <Card.Text>
             {receta.descripcionBreve}
              <br/>
               <br/>
              <span className="primary-font fw-semibold ">Duración:</span> {receta.duracion}
               <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Porciones: {receta.porciones}</span></Card.Text>
             </Card.Body>
           </Col>
         </Row>
       </Card>
     </Container>
   );
};

export default DetalleReceta;