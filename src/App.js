import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navegacion from './Componets/nav';
import BoxProductsContainer from './Componets/BoxProductContainer/BoxProductsContainer';
import ItemsDetailContainer from './Componets/ItemsDetailContainer/ItemsDetailContainer';
import CartContexProvider from './Context/CartContext';
import Cart from './Componets/carrito/Cart';






function App() {
  return (

    <BrowserRouter>
      <CartContexProvider>

        <Navegacion />

        <Routes>

          <Route path='/' element={<BoxProductsContainer />} />

          <Route path='/category/:categoryId' element={<BoxProductsContainer />}></Route>

          <Route path='/detail/:productId' element={<ItemsDetailContainer></ItemsDetailContainer>}></Route>

          <Route path='/Cart' element={<Cart />}></Route>

        </Routes>

      </CartContexProvider>
    </BrowserRouter>

  );

}

export default App;
