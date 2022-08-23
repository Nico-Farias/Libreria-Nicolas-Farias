import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import { createContext, useState } from "react";
import { Link } from 'react-router-dom';
import Product from './../Componets/ItemsProducts/Products';

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {

  const [cart, setCart] = useState([])




  const addToCart = (product, cantidad) => {

    const productInCart = cart.find((productInCart) => productInCart.id === product.id)

    if (productInCart === undefined) {
      setCart([
        ...cart,
        {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          cantidad: cantidad
        }
      ]);
    } else {
      productInCart.cantidad += cantidad;
      setCart([
        ...cart
      ])
    }


    /*
          if (productInCart) {
          const newCart = cart.map((productInCart) => {
            if (productInCart.id === product.id) {
              return { ...productInCart, cantidad: += productInCart.cantidad}
            } else {
              return productInCart;
            }
          });
     
    
           setCart(newCart)
    
           } else {
          setCart([...cart, product])
           }
    
        */
  }

  const removeProductCart = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  }


  const removeAll = () => {
    setCart([]);
  }

  const calcularCantidadCart = () => {
    const qtyCart = cart.map(product => product.cantidad);
    return qtyCart.reduce(((acc, cantidad) => acc + cantidad), 0)
  }




  return (

    <div>

      <CartContext.Provider value={{ cart, addToCart, removeProductCart, removeAll, calcularCantidadCart }}>
        {children}
      </CartContext.Provider>

    </div>

  )
}

export default CartContexProvider;

