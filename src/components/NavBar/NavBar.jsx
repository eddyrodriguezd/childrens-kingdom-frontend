import { Navbar, Container, Nav } from 'react-bootstrap';

import logo from '../../assets/logo.jpg';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img height='80px' src={logo} alt='logo' />
            <Container>
                <Navbar.Brand href="#home">Children's Kingdom</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Categorías</Nav.Link>
                        <Nav.Link href="#pricing">Promociones</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#memes">Iniciar sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;