import './style.scss';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Row, Col, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
                                        <Card.Body className="d-flex flex-column">

                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text className="d-flex"> {(product.hasEgg === false) &&
                                    (<OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-bottom">
                                                Sem <strong>ovo</strong>
                                            </Tooltip>
                                        }
                                    >
                                        <img className="foodRestriction m-1" src="https://cdn-icons-png.flaticon.com/512/2753/2753983.png" alt="Sem ovo" />

                                    </OverlayTrigger>)}
                                    {(product.hasLactose === false) &&
                                        (<OverlayTrigger
                                            overlay={
                                                <Tooltip id="tooltip-bottom">
                                                    Sem <strong>lactose</strong>
                                                </Tooltip>
                                            }
                                        >
                                            <img className="foodRestriction m-1" src="https://cdn-icons-png.flaticon.com/512/2753/2753998.png" alt="Sem lactose" />

                                        </OverlayTrigger>)}
                                    {(product.hasGluten === false) &&
                                        (<img className="foodRestriction m-1" src="https://cdn-icons.flaticon.com/png/512/3585/premium/3585246.png?token=exp=1639191702~hmac=bbb6860777cedc9c4c3949959c744f42" alt="Sem gluten" />)}</Card.Text>
                                <Button className="m-2 align-self-end mt-auto" onClick={() => addProduct({ product })} variant="light">Adicionar ao carrinho</Button>
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