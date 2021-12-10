import './style.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAxios from '../../../../hooks/useAxios';

const Categories = () => {
    const categories = useAxios('/category');

    return (
        <div id="categories">
            <Container>
                <Row>
                    {
                        categories.map(({ id, name, products }) => {
                            return (
                                <Col xs={6} md={4} key={id}>
                                    <Link to={`/categorias/${name}`}>
                                        <Image src={products[0].image} roundedCircle alt={name}/>
                                        <h6>{name}</h6>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Categories;