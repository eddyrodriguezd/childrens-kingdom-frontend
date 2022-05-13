import { Navbar, Container, Nav, OverlayTrigger, Popover, Tooltip, Button, Badge, Figure } from 'react-bootstrap';
import CategoriesGrid from './Categories/CategoriesGrid/CategoriesGrid';

import logo from '../../assets/logo.jpg';
import shoppingCartIcon from '../../assets/shopping_cart_icon.jpg'

import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ cartProducts }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img height='80px' src={logo} alt='logo' />

            <Container>

                <Navbar.Brand as={Link}
                    to={{
                        pathname: '/',
                        state: { cartProducts: cartProducts },
                    }}>
                    Children's Kingdom
                </Navbar.Brand>

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
                        <Nav.Link as={Link}
                            to={{
                                pathname: '/cart',
                                state: { cartProducts: cartProducts },
                            }}>
                            <Figure>
                                <Figure.Image
                                    width={37}
                                    height={33}
                                    alt='Shopping Cart'
                                    src={shoppingCartIcon}
                                />
                            </Figure><Badge bg='warning' text='dark'>{cartProducts.length}</Badge>
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link}
                            to={{
                                pathname: '/login',
                                state: { cartProducts: cartProducts },
                            }}>
                            Iniciar sesión
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;