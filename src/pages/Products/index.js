import './style.scss';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import { CartContext } from '../../contexts/CartContext';
import {Link} from 'react-router-dom';

const Products = () => {
    const products = useAxios('/product');
    const { addProduct } = useContext(CartContext);
    
    
    return (
        <>

            <Helmet>
                <title>Vidoti's Bakery | Produtos</title>
            </Helmet>

            <div id="products">
                <Container>
                    <Row>
                        {
                            products.map(({id, image, title, description, category, price}) => {
                                return (
                                    <Col md={4} sm={6} key={id}>
                                        <Card >
                                            <Link to={`/produtos/${id}`}><Card.Img variant="top" src={image} alt={title}/></Link>
                                            <Card.Body>
                                                <Card.Title>{title}</Card.Title>
                                                <Card.Text>{description}</Card.Text>
                                                <Card.Text>{category.name}</Card.Text>
                                                <Card.Text>R$ {price}</Card.Text>
                                                <Button variant="light">Adicionar ao carrinho</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Products;