import './style.scss';
import { NavDropdown, Container, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import BasketContent from './components/BasketContent';

// import {}

const Header = () => {
    // const [category, setCategory] = useState();

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
                            <NavDropdown.Item as={Link} to="/categorias/Confeito">Confeito</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categorias/Utensílio">Utensílio</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
                            <Nav.Link as={Link} to="/sobrenos">Sobre nós</Nav.Link>
                            <NavDropdown title={<img id="cartLogo" src="https://cdn-icons-png.flaticon.com/512/1685/1685564.png" alt="carrinho"></img>} id="navbarScrollingDropdown">
                                
                            <BasketContent />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;