import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navegacion from './Componets/nav';
import BoxProductsContainer from './Componets/BoxProductContainer/BoxProductsContainer';
import ItemsDetailContainer from './Componets/ItemsDetailContainer/ItemsDetailContainer';
import CartContexProvider from './Context/CartContext';
import Cart from './Componets/carrito/Cart';
import { Footer } from './Componets/Footer/Footer';




function App() {




  return (
    <div className='containerPrincipal'>
      <BrowserRouter>
        <CartContexProvider>

          <Navegacion />

          <Routes>

            <Route path='/' element={<BoxProductsContainer />} />

            <Route path='/category/:categoryId' element={<BoxProductsContainer />}></Route>

            <Route path='/detail/:productId' element={<ItemsDetailContainer></ItemsDetailContainer>}></Route>

            <Route path='/Cart' element={<Cart />}></Route>

          </Routes>

          <Footer />

        </CartContexProvider>
      </BrowserRouter>

    </div>

  );

}

export default App;
