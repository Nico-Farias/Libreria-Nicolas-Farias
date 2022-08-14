import React from 'react'
import { Link } from 'react-router-dom'

import BoxProductsContainer from '../BoxProductContainer/BoxProductsContainer'
import './style.scss'
import CountItems from '../Count/CountItems'



export default function DetailsProducts({ product }) {


    const addToC = (cantidadAgregado) => {
        alert(`Se agregaron ${cantidadAgregado} libros al carrito`)
    }

    return (

        <div className='contenedorDetalles container'>

            <Link to="/" element={<BoxProductsContainer />}>
                <p className='volverAtras'> Volver </p>
            </Link>



            <h2>Detalles del libro</h2>

            <div key={product.id}>

                <div className="contenedorLibro ">

                    <img className="imageP" src={product.image} alt="imagenproducto"></img>

                    <div className="title">
                        <h2 className="titleP">{product.title}</h2>
                    </div>

                    <div>
                        <p className='generoLibro'> Genero : {product.categoria}</p>
                    </div>

                    <div className="info">
                        <p className="priceP">Precio: $ {product.price}</p>
                        <p className="stockP">Disponibles {product.stock}</p>
                    </div>



                    <CountItems product={product} />





                </div>
            </div>




        </div>





    )
}
