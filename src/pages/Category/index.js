import './style.scss';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import useAxios from '../../hooks/useAxios';


const Category = () => {
    const { nomecategoria } = useParams();
    const productsOfCategory = useAxios(`/category/${nomecategoria}`);
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
                    {productsOfCategory.products && (productsOfCategory.products.map(({ id, title, image, description }) => {
                        return (
                            <Col md={4} sm={6} key={id}>
                                <Card >
                                    <Card.Img variant="top" src={image} alt={title} />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>{description}</Card.Text>
                                        <Button variant="light">Adicionar ao carrinho</Button>
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