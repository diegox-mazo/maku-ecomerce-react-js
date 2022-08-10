import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Botonera.css';
import CartWidget from '../CartWidget/CartWidget';


function Botonera(){
    return(
        <Navbar className='Botonera' expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top logo"
                        alt="MAKU"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto gap-3">
                    <Nav.Link className='nav-link' href="/">INICIO</Nav.Link>
                    <Nav.Link className='nav-link' href="/category/Sport">DEPORTIVO</Nav.Link>
                    <Nav.Link className='nav-link' href="/category/Formal">FORMAL</Nav.Link>
                    <Nav.Link className='nav-link' href="/category/Scolar">ESCOLAR</Nav.Link>
                    <Nav.Link className='nav-link' href="#link">CONTACTO</Nav.Link>                    
                </Nav>
                </Navbar.Collapse>

                <CartWidget counter={4}/>

            </Container>
        </Navbar>
    );
}

export default Botonera;