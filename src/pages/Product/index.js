import { Helmet } from 'react-helmet-async';
import './style.scss';
import { useParams } from 'react-router-dom';
import { Card, Button, CardGroup } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import { BasketContext } from '../../contexts/BasketContext';
import { useContext } from 'react';

const Product = () => {
    const { idproduto } = useParams();
    const product = useAxios(`/product/${idproduto}`);
    const { addProduct } = useContext(BasketContext);

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | {idproduto}</title>
            </Helmet>
            
            <div id="product">
            <CardGroup>
                <Card >
                    <Card.Img variant="top" src={product.image} alt={product.title} />
                </Card>

                <Card >
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Button onClick={()=> addProduct({product})} variant="light">Adicionar ao carrinho</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
            <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            </CardGroup>
            </div>
        </>
    )
}

export default Product;