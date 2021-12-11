import './style.scss';
import { Helmet } from 'react-helmet-async';
import CarouselHome from './components/Carousel';
import Categories from './components/Categories';
import { Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Home</title>
            </Helmet>
            
            <div id="banner" className="d-flex">
                <Container className="bannerAdd position-absolute bottom-0 start-0 p-4">
                    <h2>Panettone artesanal</h2>
                    <p>Edição limitada de Natal com 48h de fermentação</p>
                    
                    <Link to="/produtos/48"><Button variant="light">Detalhes</Button></Link>
                </Container>

            </div>

            <Categories />
            <CarouselHome />
        </>
    )
}

export default Home;