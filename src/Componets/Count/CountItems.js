import { useState } from "react";
import './style.scss'


export default function CountItems({ stock, addToCart }) {

    const [count, setCount] = useState(1)

    const agregar = () => {
        if (count < stock) {
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
            <button className="btn btnAgregar" onClick={() => addToCart(count)}  >Agregar {count} libros al carrito</button>
            <button className="btn btnAgregar" onClick={agregar}>+</button>

        </>
    )
}


