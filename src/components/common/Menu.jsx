import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Menu = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      id="navCOLORES"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" w-100 d-flex justify-content-evenly align-items-center">
            <div className="d-flex">
              <NavLink end to="/" className="nav-link">
                Inico
              </NavLink>
              <NavLink end to="/administrador" className="nav-link">
                Administrador
              </NavLink>
            </div>
            <div>
              <Navbar.Brand as={Link} to="/">
                {" "}
                <img
                  alt="logo"
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                El Rincón Gourmet
              </Navbar.Brand>
            </div>
            <div className="d-flex">
              <NavLink end to="/login" className="nav-link">
                Login
              </NavLink>
              <a end href="/#recetas" className="nav-link">
                Recetas
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
