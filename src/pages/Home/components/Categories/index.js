import './style.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';

const Categories = () => {
    const { nomecategoria } = useParams();
    const categories = useAxios('/category');

    return (
        <div id="categories">
            <Container>
                <Row>
                    {
                        categories.map(({ id, name }) => {
                            return (
                                <Col xs={6} md={4} key={id}>
                                    <Link to={`/categorias/${name}`}>
                                        <Image src="https://images.pexels.com/photos/6608542/pexels-photo-6608542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" roundedCircle alt={name}/>
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