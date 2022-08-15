
import "./style.scss"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from './../../Context/CartContext';
import Cart from './Cart';


export default function Carrito() {

    const { count, cart } = useContext(CartContext)

    const TotalItemsCarrito = cart.reduce((acc, { count }) => acc += count, 0)


    return (

        <div className="carritoContenedor">


            <Link to="/Cart" className="carritoContenedor">

                <img className="carrito" src="../img/carrito.png" alt="carrito"></img>
                <p className="contador">{TotalItemsCarrito}</p>


            </Link>


        </div>
    )


}
