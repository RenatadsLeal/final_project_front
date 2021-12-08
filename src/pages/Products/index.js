import './style.scss';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';

const Products = () => {
    const produto = useAxios('/product');
    
    return (
        <>
        
            <Helmet>
                <title>Vidoti's Bakery | Produtos</title>
            </Helmet>

            <div id="products">
                <Container>
                    <Row>
                        { Object.keys(produto).map((title) => {
                            return (
                                
                                // <div key={index}>
                                    <Col md={4} sm={6} key={title}>
                                        <Card >
                                            {/* <Card.Img variant="top" src={image} /> */}
                                            <Card.Body>
                                                <Card.Title>{title}</Card.Title>
                                                {/* <Card.Text>{description}</Card.Text>
                                                <Card.Text>{category}</Card.Text> */}
                                                <Card.Text>{title}</Card.Text>
                                                <Button variant="light">Adicionar ao carrinho</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                // </div>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Products;