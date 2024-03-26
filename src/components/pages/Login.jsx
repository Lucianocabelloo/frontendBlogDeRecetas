import React, { useState } from 'react';
import "../../Login.css"
import "../common/Menu"
import { useForm } from "react-hook-form"
import { iniciarSesion } from '../../helpers/queries';
import { useNavigate } from 'react-router-dom';


const Login = ({setUsuarioLogueado}) => {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const navegacion = useNavigate();

  const handleSignUpClick = () => {
    setIsSignInActive(false);
  };

  const handleSignInClick = () => {
    setIsSignInActive(true);
  };

  const crearCuenta = (usuario) => {
    console.log("Crea cuenta", usuario)
  }

  const onSubmit = async (usuario) => {
    console.log("El boton funciona")
    try {
      if(iniciarSesion(usuario))
      console.info("Ingresaste al sistema")
      setUsuarioLogueado(usuario.email)
      navegacion('/administrador');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  return (
    <>
    <div className={`container containerLogin ${isSignInActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit(crearCuenta)}>
          <h1>Crear Cuenta</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o use su email para registrarse</span>
          <input type="text" placeholder="Nombre" {...register("Nombre")} />
          <input type="email" placeholder="Email" {...register("Email")} />
          <input type="password" placeholder="Contraseña" {...register("Contraseña")} />
          <button type='submit' >Registrarse Ahora</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Ingresar</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o use su cuenta</span>
          <input 
          type="email" 
          placeholder="Email"   
          {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El email debe contener al menos 10 caracteres",
                  },
                  maxLength: {
                    value: 250,
                    message: "El email debe contener como máximo 250 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Ingrese una dirección de correo electrónico válida",
                  },
                })}  />
          <input type="Contraseña" 
          placeholder="Password"   
          {...register("password", {
                  required: "El password es obligatorio",
                  minLength: { value: 8, message: "el minimo es de 8 caracteres" },
                  maxLength: {
                    value: 15,
                    message: "el maximo es de 15 caracteres",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message: "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },
                })} />
          <a href="#">Olvidaste tu contraseña?</a>
          <button type='submit' >Ingresar</button>
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
