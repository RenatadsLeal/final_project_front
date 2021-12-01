import './style.scss';
import { Container, Navbar, Nav, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Vidoti's Bakery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#deets">Categorias</Nav.Link>
                            <Nav.Link href="#deets">Produtos</Nav.Link>
                            <Nav.Link href="#deets">Sobre nós</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;