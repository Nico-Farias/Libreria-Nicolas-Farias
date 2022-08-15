import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import { createContext, useState } from "react";
import { Link } from 'react-router-dom';

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [count, setCount] = useState([1])

  function cambiarButton() {

    const btnAgregar = document.getElementById("btnCart")
    btnAgregar.textContent = "Agregado al carrito";
    btnAgregar.disabled = true;


  }

  const addToCart = (product) => {

    const productInCart = cart.find((productInCart) => productInCart.id === product.id)

    cambiarButton();

    if (productInCart) {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...productInCart, count: productInCart.count + product.count }
        } else {
          return productInCart;
        }
      });


      setCart(newCart)

    } else {
      setCart([...cart, product])
    }


  }

  const removeProductCart = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  }


  const removeAll = () => {
    cart([]);
  }




  return (

    <div>

      <CartContext.Provider value={{ cart, addToCart, removeProductCart, removeAll, count, setCount }}>
        {children}
      </CartContext.Provider>

    </div>

  )
}

export default CartContexProvider;

