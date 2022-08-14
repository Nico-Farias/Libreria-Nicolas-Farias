
import "./style.scss"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from './../../Context/CartContext';


export default function Carrito() {

    const { count } = useContext(CartContext)


    return (

        <div className="carritoContenedor">


            <Link to="/Cart" className="carritoContenedor">
                <img className="carrito" src="../img/carrito.png" alt="carrito"></img>
                <p className="contador">{count}</p>
            </Link>


        </div>
    )


}
