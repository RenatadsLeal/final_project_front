import './style.scss';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BasketContent from './components/BasketContent';

const Header = () => {
    return (
        <div id="header">
            <Navbar className="fixed-top px-3" collapseOnSelect expand="md" bg="light opacity-75" variant="light">
                    <Navbar.Brand as={Link} to="/">Vidoti's Bakery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav d-flex">
                        <Nav className="d-flex">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/categorias/Pão%20branco">Pão Branco</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categorias/Pão%20integral">Pão Integral</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categorias/Pão%20recheado">Pão Recheado</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categorias/Pão%20doce">Pão Doce</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categorias/Confeito">Confeito</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categorias/Utensílio">Utensílio</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
                            <Nav.Link as={Link} to="/sobrenos">Sobre nós</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto justify-content-end">
                            <NavDropdown align="end" title={<img id="cartLogo" src="https://cdn-icons-png.flaticon.com/512/1685/1685564.png" alt="Cesta"></img>} id="navbarScrollingDropdown">
                                <BasketContent />
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/cesta">Ir para Cesta</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;