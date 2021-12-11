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
                                                <Card.Text> {(product.hasEgg === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299893.png?token=exp=1639191980~hmac=5d5f2128edeb52e5b4d872d2847522de" alt="Sem ovo" />)}
                                                    {(product.hasLactose === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299970.png?token=exp=1639191890~hmac=e5af251ba2a0d148c058a6b64557be1e" alt="Sem lactose" />)}
                                                    {(product.hasGluten === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/3585/premium/3585246.png?token=exp=1639191702~hmac=bbb6860777cedc9c4c3949959c744f42" alt="Sem gluten" />)}</Card.Text>
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