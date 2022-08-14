import React from 'react'
import { useContext } from 'react';
import { CartContext } from './../../Context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeProductCart, removeAll } = useContext(CartContext)

    return (
        <div className='Carrito container'>

            <h2 >
                Tu carrito
            </h2>

            {
                cart.map(item =>

                    <div key={item.id}>

                        <div className='contenedorProductCart'>
                            <img src={item.image}></img>

                            <div>
                                <h2>{item.count} --- {item.title}</h2>
                            </div>


                            <p>
                                $ {item.price}
                            </p>



                            <p>Total : {item.price * item.count}</p>

                            <p className='remove' onClick={() => { removeProductCart(item.id) }}>Remove</p>



                        </div>


                    </div>





                )

            }

            <div className='botonesCart'>


                <p className='totalAPagar'>Total a pagar : $ 0</p>

                <button className='finalizar'>Finalizar Compra</button>
                <button className='vaciarCart' onClick={() => {
                    removeAll()
                }}>Vaciar carrito</button>
                <Link className='seguirCompra' to="/">Seguir comprando</Link>






            </div>

        </div>
    )
}


export default Cart;