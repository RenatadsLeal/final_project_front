import './style.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div id="categories">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Link to="/categorias/pao-branco">
                            <Image src="https://images.pexels.com/photos/6608542/pexels-photo-6608542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" roundedCircle />
                            <h6>Pão branco</h6>
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to="/categorias/pao-integral">
                            <Image src="https://images.unsplash.com/photo-1609501676897-bf34401829ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" roundedCircle />
                            <h6>Pão integral</h6>
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to="/categorias/pao-recheado">
                            <Image src="https://images.unsplash.com/photo-1597922650364-dc88d9d18d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2572&q=80" roundedCircle />
                            <h6>Pão recheado</h6>
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to="/categorias/pao-doce">
                            <Image src="https://images.unsplash.com/photo-1500816558239-6b91f4256ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTg1fHxicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" roundedCircle />
                            <h6>Pão doce</h6>
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to="/categorias/confeitos">
                            <Image src="https://images.pexels.com/photos/6605315/pexels-photo-6605315.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" roundedCircle />
                            <h6>Confeitos</h6>
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to="/categorias/acessorios">
                            <Image src="https://images.pexels.com/photos/5907563/pexels-photo-5907563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" roundedCircle />
                            <h6>Acessórios</h6>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Categories;