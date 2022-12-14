import React from 'react'
import { Link } from 'react-router-dom'

import BoxProductsContainer from '../BoxProductContainer/BoxProductsContainer'
import './style.scss'
import CountItems from '../Count/CountItems'
import { useState, useContext } from 'react'
import { CartContext } from './../../Context/CartContext';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




export default function DetailsProducts({ product }) {

    const [itemCount, setItemCount] = useState(0);

    const { addToCart } = useContext(CartContext);


    const addToC = (cantidad) => {
        MySwal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se añadio ${cantidad} producto a tu carrito`,
            showConfirmButton: false,
            timer: 1500
        })

        setItemCount(cantidad)
        addToCart(product, cantidad)
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

                    <div className="info">
                        <p className="priceP">Precio: $ {product.price}</p>
                        <p className="stockP">Disponibles {product.stock}</p>
                    </div>


                    {
                        itemCount === 0 ?

                            <CountItems stock={product.stock} initial={itemCount} addToC={addToC} />

                            :
                            <Link to='/cart'> < button className="btnVerCarrito" >Ver carrito</button></Link>

                    }







                </div>
            </div>




        </div>





    )
}
