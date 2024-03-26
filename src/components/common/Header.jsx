import React from 'react'
import { Button } from 'react-bootstrap'
import headerIMG from "../../assets/img/headerIMG25.jpg"
import Menu from './Menu'

export const Header = () => {
  return (
    <header className='headerContainer'>
      <Menu/>
        <section className='container-fluid d-flex justify-content-center align-items-center h-100 gap-3'>
            <div className='headerInfo d-flex flex-column gap-4 align-items-center'>
                <h2>Cocina Deliciosas comidas con <span>El rincon Gourmet</span></h2>
                <p>¿Sos un amante de la buena comida? Entonces aqui encontraste tu nuevo lugar favorito.</p>

                <Button href='#recetas' variant='primary'>Ir a las recetas.</Button>
            </div>
            <div className='headerImg'>
                <img src={headerIMG} alt="Comida deliciosa"  />
            </div>
        </section>
    </header>
  )
}

export default Header;
