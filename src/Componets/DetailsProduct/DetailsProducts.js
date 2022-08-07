import React from 'react'
import { Link } from 'react-router-dom'

import BoxProductsContainer from '../BoxProductContainer/BoxProductsContainer'
import './style.scss'
import CountItems from '../Count/CountItems'



export default function DetailsProducts({ title, image, price, cantidad, stock, id, categoria }) {


    const addToC = (cantidadAgregado) => {
        alert(`Se agregaron ${cantidadAgregado} libros al carrito`)
    }

    return (

        <div className='contenedorDetalles container'>

            <Link to="/" element={<BoxProductsContainer />}>
                <p className='volverAtras'> Volver </p>
            </Link>



            <h2>Detalles del libro</h2>

            <div key={id}>

                <div className="contenedorLibro ">

                    <img className="imageP" src={image} alt="imagenproducto"></img>

                    <div className="title">
                        <h2 className="titleP">{title}</h2>
                    </div>

                    <div>
                        <p className='generoLibro'> Genero : {categoria}</p>
                    </div>

                    <div className="info">
                        <p className="priceP">Precio: $ {price}</p>
                        <p className="stockP">Disponibles {stock}</p>
                    </div>



                    <CountItems stock={stock} addToCart={addToC} />





                </div>
            </div>




        </div>





    )
}
