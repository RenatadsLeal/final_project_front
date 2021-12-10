import './style.scss';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../contexts/BasketContext';
import { useContext } from 'react';

const Category = () => {
    const { nomecategoria } = useParams();
    const productsOfCategory = useAxios(`/category/${nomecategoria}`);
    const { addProduct } = useContext(BasketContext);
    console.log(productsOfCategory);
    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | {nomecategoria}</title>
            </Helmet>
            {/* <h2>{productsOfCategory.name ? productsOfCategory.name : "categoria"}</h2> */}
            <div id="category">
                <Container>
                    <Row>
                        {productsOfCategory.products && (productsOfCategory.products.map((product) => {
                            return (
                                <Col md={4} sm={6} key={product.id}>
                                    <Card >
                                        <Link to={`/produtos/${product.id}`}><Card.Img variant="top" src={product.image} alt={product.title} /></Link>
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                            <Button onClick={() => addProduct({ product })} variant="light">Adicionar ao carrinho</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Category;