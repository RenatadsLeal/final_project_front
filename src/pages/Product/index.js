import { Helmet } from 'react-helmet-async';
import './style.scss';
import { useParams } from 'react-router-dom';
import { Card, Button, CardGroup, Accordion, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import { BasketContext } from '../../contexts/BasketContext';
import { useContext } from 'react';

const Product = () => {
    const { idproduto } = useParams();
    const product = useAxios(`/product/${idproduto}`);
    const { addProduct } = useContext(BasketContext);
    console.log(product.title);

    return (
        <>
            <Helmet>
                <title>{`Vidoti's Bakery | ${product.title}`}</title>
            </Helmet>

            <div id="product">
                <Container>
                    <CardGroup>
                        <Card >
                            <Card.Img variant="top" src={product.image} alt={product.title} />
                        </Card>

                        <Card >
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
                    </CardGroup>

                    <Accordion>
                        <Accordion.Item className="mb-2" eventKey="0">
                            <Accordion.Header>Ingredientes</Accordion.Header>
                            <Accordion.Body>{product.ingredients}</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </>
    )
}

export default Product;