import './style.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Categories = () => {
    return (
        <div id="categories">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://images.iphotography.com/wp-content/uploads/2020/03/24122631/porait-example1.jpg" roundedCircle />
                        <h4>Pão branco</h4>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress" roundedCircle />
                        <h4>Pão integral</h4>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress" roundedCircle />
                        <h4>Pão recheado</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://cdn.shopify.com/s/files/1/3026/6974/files/portrait-photography-surprised-baby.jpg?v=1533317697" roundedCircle />
                        <h4>Pão doce</h4>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://images.unsplash.com/photo-1553020876-6727b5df24f2?ixlib=rb-1.2.1" roundedCircle />
                        <h4>Confeitos</h4>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://images.unsplash.com/photo-1599819055803-717bba43890f?ixlib=rb-1.2.1" roundedCircle />
                        <h4>Acessórios</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Categories;