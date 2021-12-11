import './style.scss';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { BasketContext } from '../../contexts/BasketContext';
import { Helmet } from 'react-helmet-async';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Basket = () => {
    const [total, setTotal] = useState(0);
    const { products, deleteProduct } = useContext(BasketContext);
    console.log(products);

    useEffect(() => {
        Total()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    const Total = () => {
        let subtotal = 0;
        if (products.length === 0) {
            setTotal(0)
        }
        products.forEach(({ product }) => {
            setTotal(subtotal += parseInt(product.price))
        })
    }

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Cesta</title>
            </Helmet>

            <Container id="basket">
                {
                    products.map(({ product }) => {
                        return (
                            <Card key={product.id}>
                                <Card.Body className="d-flex align-items-center flex-wrap g-1">
                                    
                                <Link to={`/produtos/${product.id}`}><Card.Img className="col" variant="top" src={product.image} alt={product.title} /></Link>
                                <Card.Title className="col p-3">{product.title}</Card.Title>
                                    <Card.Text className="col p-3">R$ {product.price}</Card.Text>
                                    
                                    <Button className="col" onClick={() => deleteProduct({ product })} variant="light">Excluir</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                <Card className="d-flex p-3">
                <Card.Title className="ms-auto">Total R$ {total}</Card.Title>
                </Card>
                    
            </Container>
        </>
    )
}

export default Basket;