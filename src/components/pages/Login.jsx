import React, { useState } from 'react';
import "../../Login.css"
import "../common/Menu"
import Menu from '../common/Menu';


const Login = () => {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignInActive(false);
  };

  const handleSignInClick = () => {
    setIsSignInActive(true);
  };

  const crearCuenta = () => {
    console.log("Crea cuenta")
  }

  const iniciarSesion = () => {
    console.log("Iniciando Sesion")
  }
  return (
    <>
    <Menu></Menu>
    <div className={`container containerLogin ${isSignInActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Crear Cuenta</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o use su email para registrarse</span>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button onClick={crearCuenta} >Registrarse Ahora</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Ingresar</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o use su cuenta</span>
          <input type="email" placeholder="Email" />
          <input type="Contraseña" placeholder="Password" />
          <a href="#">Olvidaste tu contraseña?</a>
          <button onClick={iniciarSesion} >Ingresar</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Bienvenido de nuevo!</h2>
            <p>Para mantenerte conectado con nosotros, inicie sesión con su información personal</p>
            <button onClick={handleSignUpClick} className="ghost" >Ingresar</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hola!</h1>
            <p>Ingrese sus detalles personales y comience su viaje con nosotros</p>
            <button onClick={handleSignInClick} className="ghost" >Registrate Ahora</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
