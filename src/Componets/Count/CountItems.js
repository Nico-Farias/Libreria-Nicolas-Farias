import { useState } from "react";
import './style.scss'
import { CartContext } from './../../Context/CartContext';



export default function CountItems({ initial = 1, addToC, stock = 0 }) {

    const [count, setCount] = useState(0)


    const agregar = () => {
        if (count < stock) {
            setCount(count + 1);


        }

    }
    const quitar = () => {
        if (count > 1) {
            setCount(count - 1);


        }
    }




    return (
        <>
            <div className="contador1">
                <button className="btn btnQuitar" onClick={quitar}>-</button>
                <p>{count}</p>
                <button className="btn btnAgregar" onClick={agregar} >+</button>
            </div>

            <button id="btnCart" className="btn btnAgregar" onClick={() => { addToC(count) }} >Agregar al carrito</button>
        </>
    )
}


