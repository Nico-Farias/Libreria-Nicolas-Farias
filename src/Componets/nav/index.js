import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import Cart from '../carrito';
import "./style.scss"

function Navegacion() {
    return (
        <Navbar className='navegacion' bg="light" expand="lg">
            <Container>
                <Navbar.Brand >
                    <Link to="/">
                        <img className='imgLogo' src='../img/NUEVO LOGO.png'></img>
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavDropdown className='categorias' title="Categorias" >

                            <ul className='categoriasLibros'>

                                <li> <Link to="/category/aRo21344yIBiM9aOT3Ti">Ficcion</Link></li>

                                <li> <Link to="/category/ZQq449OerKWH5eWHMtal">Poesia</Link></li>

                                <li> <Link to="/category/HZMNGMhStHwChAXhnYdu">Juvenil</Link></li>

                                <li> <Link to="/category/ln9SWtKPMRdd4MvGjSCJ">Infantil</Link></li>

                                <li> <Link to="/category/2iuVk7vKBE8o2TI7vm4j">Comics</Link></li>

                                <li> <Link to="/category/YQzUbe0jfDSEkakTOet7">Historia</Link></li>
                            </ul>

                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
                <Cart />
            </Container>
        </Navbar>
    );
}

export default Navegacion;