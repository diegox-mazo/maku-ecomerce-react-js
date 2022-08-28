import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Botonera.css';



function Botonera(){
    return(
        <Navbar className='Botonera' expand="md">
            <Container>
                <NavLink to="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top logo"
                        alt="MAKU"
                    />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto gap-3">
                    <NavLink className='nav-link' to={"/"}>INICIO</NavLink>
                    <NavLink className='nav-link' to={"/category/Sport"}>DEPORTIVO</NavLink>
                    <NavLink className='nav-link' to={"/category/Formal"}>FORMAL</NavLink>
                    <NavLink className='nav-link' to={"/category/Scolar"}>ESCOLAR</NavLink>
                    {/* <NavLink className='nav-link' to="#link">CONTACTO</NavLink>                     */}
                </Nav>
                </Navbar.Collapse>
                <NavLink to={'/cart'}>
                    <CartWidget/>
                </NavLink>
            </Container>
        </Navbar>
    );
}

export default Botonera;