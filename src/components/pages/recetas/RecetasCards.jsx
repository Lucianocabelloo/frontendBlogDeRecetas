import React from 'react'


export const RecetasCards = ({receta}) => {

    const ingredientesArray = receta.ingredientes.split(',').map(ingrediente => ingrediente.trim());


    console.log(receta)
  return (
    <div className='card d-flex justify-content-between'>
        <div className='cardHeader d-flex gap-3'>
            <div className='cardIMG'>
                <img src={receta.imagen} alt="" height={150} width={150} />
            </div>
            <div className='cardTitle text-truncate'>
                <h4>{receta.nombreReceta}</h4>
                <div className='cardValues'>
                <p>Duracion: {receta.duracion} Minutos</p>
                <p>Porciones: {receta.porciones}</p>
                </div>
            </div>
        </div>
        <hr />
        <div className='cardBody '>
            <p >{receta.descripcionBreve}.</p>
            <hr />
            <div>
            <h4>Ingredientes</h4>

            <ul>
          {ingredientesArray.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
            </div>
        </div>
        <hr />
        <div className='cardFooter'>
            <a className='cardButton' href="#">Ver receta completa</a>
         
        </div>
    </div>
  )
}

export default RecetasCards;