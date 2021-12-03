import './style.scss';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                <LinkContainer to="/"><Navbar.Brand>Vidoti's Bakery</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to="/categorias"><Nav.Link>Categorias</Nav.Link></LinkContainer>
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