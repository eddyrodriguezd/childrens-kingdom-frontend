import { Navbar, Container, Nav, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import CategoriesGrid from './Categories/CategoriesGrid/CategoriesGrid';

import logo from '../../assets/logo.jpg';

import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img height='80px' src={logo} alt='logo' />
            <Container>
                <Navbar.Brand href="/">Children's Kingdom</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <OverlayTrigger
                            trigger='click'
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Popover id={'popover-positioned-bottom'} className='popover'>
                                    <CategoriesGrid />
                                </Popover>
                            }>
                            <Nav.Link>
                                Categorías
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key='right'
                            placement='right'
                            overlay={
                                <Tooltip id={'tooltip-right'}>
                                    <strong>Próximamente</strong>.
                                </Tooltip>
                            }>
                            <Nav.Link>Promociones</Nav.Link>
                        </OverlayTrigger>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;