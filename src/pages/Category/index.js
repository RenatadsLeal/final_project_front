import './style.scss';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const Category = () => {
const {nomecategoria} = useParams();

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | {nomecategoria}</title>
            </Helmet>

            <div id="category">
                <Container>
                    <Row>
                        <Col md={4} sm={6}>
                            <Card >
                                <Card.Img variant="top" src="https://images.pexels.com/photos/6150708/pexels-photo-6150708.jpeg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1500816558239-6b91f4256ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTg1fHxicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={4}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1500816558239-6b91f4256ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTg1fHxicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={4}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/6150708/pexels-photo-6150708.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default Category;