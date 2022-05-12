import { Navbar, Container, Nav, OverlayTrigger, Popover, Tooltip, Button, Badge, Figure } from 'react-bootstrap';
import CategoriesGrid from './Categories/CategoriesGrid/CategoriesGrid';

import logo from '../../assets/logo.jpg';
import shoppingCartIcon from '../../assets/shopping_cart_icon.jpg'

import './NavBar.css';

const NavBar = ({items}) => {
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
                            }
                            rootClose={true}>
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
                        <Nav.Link href="/cart">
                            <Figure>
                                <Figure.Image
                                    width={37}
                                    height={33}
                                    alt='Shopping Cart'
                                    src={shoppingCartIcon}
                                />
                            </Figure><Badge bg='warning' text='dark'>{items}</Badge>
                        </Nav.Link>
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