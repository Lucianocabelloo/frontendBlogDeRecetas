import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const logout = ()=>{
    //quitar la sesion de sessionStorage
    sessionStorage.removeItem('loginRollingCoffee')
    //limpiar el state
    setUsuarioLogueado("")
  }
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
        <Navbar.Collapse className=" justify-content-center" id="basic-navbar-nav">
          <Nav>

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
              <NavLink end to="/" className="nav-link">
                Inico
              </NavLink>
            {
              usuarioLogueado?.length > 0 ? (
                <>
                  <NavLink end to="/administrador" className="nav-link">
                    Administrador
                  </NavLink>
                  <Button onClick={logout}>Logout</Button>
                </>
              ) : (
                <NavLink end to="/login" className="nav-link">
                  Login
                </NavLink>
              )
            }
              <a end href="/#recetas" className="nav-link">
                Recetas
              </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
