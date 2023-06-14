import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import logo from '../images/logo.png'

const Header = () => {

    window.onscroll = function() {
        var header = document.querySelector("header");
        if (window.pageYOffset > 0) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <> 
                <Navbar.Brand href="."><Image src={logo} alt='logo' title='Utica PC'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href=".">Inicio</Nav.Link>
                        <Nav.Link href="/sobrenosotros">Sobre nosotros</Nav.Link>
                        <Nav.Link href="/servicios">Servicios</Nav.Link>
                        <Nav.Link href="/ordenadores">PC a medida</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;