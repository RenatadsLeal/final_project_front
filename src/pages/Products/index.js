import './style.scss';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import { BasketContext } from '../../contexts/BasketContext';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = useAxios('/product');
    const { addProduct } = useContext(BasketContext);

    return (
        <>

            <Helmet>
                <title>Vidoti's Bakery | Produtos</title>
            </Helmet>

            <div id="products">
                <Container>
                    <Row>
                        {
                            products.map((product) => {
                                return (
                                    <Col md={4} sm={6} key={product.id}>
                                        <Card >
                                            <Link to={`/produtos/${product.id}`}><Card.Img variant="top" src={product.image} alt={product.title} /></Link>
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>{product.description}</Card.Text>
                                                <Card.Text>R$ {product.price}</Card.Text>
                                                <Card.Text> {(product.hasEgg === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299893.png?token=exp=1639098059~hmac=6ed11af24646bf384006434d5d6a77f8" alt="logo" />)}
                                                    {(product.hasLactose === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299970.png?token=exp=1639098059~hmac=4ac77b4bbc2871c2fd5b4a123b09ec0a" alt="logo" />)}
                                                    {(product.hasGluten === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299923.png?token=exp=1639098059~hmac=b8763c23d6051be17e3986a424ea845c" alt="logo" />)}</Card.Text>
                                                <Button onClick={() => addProduct({ product })} variant="light">Adicionar ao carrinho</Button>
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