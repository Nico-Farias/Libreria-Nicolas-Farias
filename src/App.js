import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/esm/Container';
import './App.scss';
import Navegacion from './Componets/nav';
import BoxProductsContainer from './Componets/BoxProductContainer/BoxProductsContainer';
import ItemsDetailContainer from './Componets/ItemsDetailContainer/ItemsDetailContainer';




function App() {
  return (
    <div >
      <Container>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >


          <BrowserRouter>
            <Navegacion />

            <Routes>

              <Route path='/' element={<BoxProductsContainer />} />
              <Route path='/category/:categoryId' element={<BoxProductsContainer />}></Route>
              <Route path='/detail/:productId' element={<ItemsDetailContainer></ItemsDetailContainer>}></Route>
            </Routes>


          </BrowserRouter>



        </ThemeProvider>
      </Container>

    </div>
  );
}

export default App;
