
import "./style.scss"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from './../../Context/CartContext';
import Cart from './Cart';


export default function Carrito() {

    const { calcularCantidadCart } = useContext(CartContext);



    return (

        <div className="carritoContenedor">


            <Link to="/Cart" className="carritoContenedor">

                <img className="carrito" src="../img/carrito.png" alt="carrito"></img>
                <p className="contador">{calcularCantidadCart()}</p>


            </Link>


        </div>
    )


}
