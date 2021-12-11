import { Helmet } from 'react-helmet-async';
import './style.scss';
import { useParams } from 'react-router-dom';
import { Card, Button, CardGroup, Accordion, Container } from 'react-bootstrap';
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
                                <Card.Text> {(product.hasEgg === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299893.png?token=exp=1639098059~hmac=6ed11af24646bf384006434d5d6a77f8" alt="logo" />)}
                                    {(product.hasLactose === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299970.png?token=exp=1639098059~hmac=4ac77b4bbc2871c2fd5b4a123b09ec0a" alt="logo" />)}
                                    {(product.hasGluten === false) && (<img className="foodRestriction" src="https://cdn-icons.flaticon.com/png/512/4299/premium/4299923.png?token=exp=1639098059~hmac=b8763c23d6051be17e3986a424ea845c" alt="logo" />)}</Card.Text>
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