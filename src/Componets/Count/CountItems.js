import { useState, useContext } from "react";
import './style.scss'
import { CartContext } from './../../Context/CartContext';



export default function CountItems({ product }) {

    const { addToCart, count, setCount } = useContext(CartContext)



    const agregar = () => {
        if (count < product.stock) {
            (setCount(count + 1))


        }

    }
    const quitar = () => {
        if (count > 1) {
            (setCount(count - 1))


        }
    }



    return (
        <>
            <button className="btn btnQuitar" onClick={quitar}>-</button>
            <button className="btn btnAgregar" onClick={() => { addToCart({ ...product, count }) }}  >Agregar {count} libros al carrito</button>
            <button className="btn btnAgregar" onClick={agregar}>+</button>

        </>
    )
}


