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
                    <img className='imgLogo' src='../img/NUEVO LOGO.png'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavDropdown className='categorias' title="Categorias" >

                            <ul className='categoriasLibros'>

                                <li> <Link to="/category/ficcion">Ficcion</Link></li>

                                <li> <Link to="/category/poesia">Poesia</Link></li>

                                <li> <Link to="/category/juvenil">Juvenil</Link></li>

                                <li> <Link to="/category/infantil">Infantil</Link></li>

                                <li> <Link to="/category/comics">Comics</Link></li>

                                <li> <Link to="/category/historia">Historia</Link></li>
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