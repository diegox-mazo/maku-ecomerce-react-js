import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';


function Botonera(){
    return(
        <Navbar className='Botonera' expand="md">
            <Container>
                <Navbar.Brand href="../index.js">
                    <img
                        src={logo}
                        className="d-inline-block align-top logo"
                        alt="MAKU"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto gap-3">
                    <Nav.Link className='nav-link' href="../index.js">INICIO</Nav.Link>
                    <Nav.Link className='nav-link' href="#link">NOSOTROS</Nav.Link>
                    <Nav.Link className='nav-link' href="#link">GALERIA</Nav.Link>
                    <Nav.Link className='nav-link' href="#link">CONTACTO</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Botonera;