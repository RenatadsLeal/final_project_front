import './style.scss';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item>

                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=1260"
                                alt="First slide"
                            />

                        </Col>
                        <Col xs={6} md={4}>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=1260"
                                alt="First slide"
                            />
                        </Col>
                        <Col xs={6} md={4}>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=1260"
                                alt="First slide"
                            />
                        </Col>
                    </Row>
                </Container>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=1260"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/4397272/pexels-photo-4397272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=1260"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome;