import React from 'react'
import { useContext } from 'react';
import { CartContext } from './../../Context/CartContext';
import { Link } from 'react-router-dom'
import { doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../data/ApiFirestore';
import { collection } from 'firebase/firestore';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Cart = () => {

    const { cart, removeProductCart, removeAll } = useContext(CartContext)


    const Total = cart.reduce((acc, { price, cantidad }) => acc += price * cantidad, 0)

    let timerInterval;

    const createOrder = () => {

        const itemsForDB = cart.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            qty: item.cantidad
        }))

        cart.forEach(async (item) => {
            const itemRef = doc(DB, "Productos", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad)
            });

        });

        const order = {
            buyer: {
                name: "Nico Farias",
                email: "nico_ifc_07@gmail.com",
                phone: "3464448290"
            },
            total: { Total },
            items: itemsForDB,
            date: serverTimestamp()
        };

        const createOrderInFirestore = async () => {
            const newOrder = doc(collection(DB, "ordenes"))
            await setDoc(newOrder, order);
            return newOrder;
        }

        createOrderInFirestore()
            .then(result =>


                MySwal.fire({
                    title: 'Se esta tomando tu pedido!',

                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        MySwal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Tu pedido se tomo correctamente',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        removeAll()
                    }
                })

                /*alert("orden creada con exito")*/
            )
            .catch(err => MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tu orden no pudo ser agregada',

            }));



    }





    return (
        <div className='Carrito container'>



            {
                cart.length === 0 ? <h2 className='carritoVacio'>Tu carrito esta vacio  </h2> :



                    cart.map(item =>

                        <div key={item.id}>

                            <div className='contenedorProductCart'>
                                <img src={item.image}></img>

                                <div>

                                    <h2>{item.cantidad} --- {item.title}</h2>
                                </div>


                                <p>
                                    $ {item.price}
                                </p>



                                <p>Total : $ {item.price * item.cantidad}</p>

                                <p className='remove' onClick={() => { removeProductCart(item.id) }}>Remove</p>



                            </div>


                        </div>










                    )






            }

            <div className='botonesCart'>

                <p className='totalAPagar'>Total a pagar : $ {Total}</p>

                <button className='finalizar' onClick={createOrder}>Finalizar Compra</button>
                <button className='vaciarCart' onClick={() => { removeAll() }}>Vaciar carrito</button>
                <Link className='seguirCompra' to="/">Seguir comprando</Link>

            </div>

        </div>
    )
}


export default Cart;