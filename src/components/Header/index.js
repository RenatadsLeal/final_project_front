import './style.scss';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown, Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar className="fixed-top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/"><Navbar.Brand>Vidoti's Bakery</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <LinkContainer to="/pao-branco"><NavDropdown.Item>Pão Branco</NavDropdown.Item></LinkContainer>
                                <NavDropdown.Item >Pão Integral</NavDropdown.Item>
                                <NavDropdown.Item >Pão Recheado</NavDropdown.Item>
                                <NavDropdown.Item >Pão Doce</NavDropdown.Item>
                                <NavDropdown.Item >Confeitos</NavDropdown.Item>
                                <NavDropdown.Item >Utensílios</NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer to="/produto"><Nav.Link>Produtos</Nav.Link></LinkContainer>
                            <LinkContainer to="/sobrenos"><Nav.Link>Sobre nós</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;