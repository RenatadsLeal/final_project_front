import './style.scss';
import { NavDropdown, Container, Navbar, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CartContent from './components/CartContent';

// import {}

const Header = () => {
    const [category, setCategory] = useState();

    // useEffect(() => {
    //     //chamada api
    //     console.log(category);
    // })

    return (
        <div id="header">
            <Navbar className="fixed-top" collapseOnSelect expand="md" bg="light opacity-75" variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/">Vidoti's Bakery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {/* /export default function / export conts Componente =  () =>import sem {} (tudo em uma linha) / export default comeponete com {} */}
                        {/* <Navbar.Brand as={Link} to ="/">Home</Navbar.Brand> */}
                        {/* Colocar o Header no Routes, fica em todas as telas */}
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/categorias/Pão%20branco">Pão Branco</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categorias/Pão%20integral">Pão Integral</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categorias/Pão%20recheado">Pão Recheado</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categorias/Pão%20doce">Pão Doce</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categorias/Confeitos">Confeitos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categorias/Utensílios">Utensílios</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
                            <Nav.Link as={Link} to="/sobrenos">Sobre nós</Nav.Link>
                            <CartContent />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;