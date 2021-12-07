import './style.scss';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown, Container, Navbar, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
// import {}

const Header = () => {
    const [category, setCategory] = useState();

    useEffect(() => {
        //chamada api
        console.log(category);
    })

    return (
        <div id="header">
            <Navbar className="fixed-top" collapseOnSelect expand="md" bg="light opacity-75" variant="light">
                <Container>
                    <LinkContainer to="/"><Navbar.Brand>Vidoti's Bakery</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <LinkContainer to="/categorias/pao-branco"><NavDropdown.Item>Pão Branco</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/categorias/pao-integral"><NavDropdown.Item >Pão Integral</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/categorias/pao-recheado"><NavDropdown.Item >Pão Recheado</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/categorias/pao-doce"><NavDropdown.Item >Pão Doce</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/categorias/confeitos"><NavDropdown.Item >Confeitos</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/categorias/utensilios"><NavDropdown.Item >Utensílios</NavDropdown.Item></LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/produtos"><Nav.Link>Produtos</Nav.Link></LinkContainer>
                            <LinkContainer to="/sobrenos"><Nav.Link>Sobre nós</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;