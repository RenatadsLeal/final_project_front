import { Helmet } from 'react-helmet-async';
import './style.scss';
import { useParams } from 'react-router-dom';
import { Card, Button, CardGroup } from 'react-bootstrap';

const Product = () => {
    const { idproduto } = useParams();
    // precisa mesmo ser com o id? nao pode ser com o nome do produto?

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | {idproduto}</title>
            </Helmet>
            
            <div id="product">
            <CardGroup>
                <Card >
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1" />
                </Card>

                <Card >
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="light">Go somewhere</Button>
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