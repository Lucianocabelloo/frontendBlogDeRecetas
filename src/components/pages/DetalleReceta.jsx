import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-3 mainContainer">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">Cheese Burguer con verduras</Card.Title>
              <hr />
              <Card.Text>
              Esta deliciosa Cheeseburger con Verduras combina lo mejor de ambos mundos: la jugosa carne de res, el queso derretido, y la frescura de las verduras.
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Duración:</span> 45
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">240 Calorias</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;