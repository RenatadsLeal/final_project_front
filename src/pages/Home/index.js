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
                <Container className="bannerAdd position-absolute bottom-0 start-0 p-5">
                    <h2>Panettone artesanal</h2>
                    <p>Edição limitada com 48hrs de fermentação</p>
                    
                    <Link to="./"><Button variant="light">Compra aqui moça</Button></Link>
                </Container>

            </div>

            <Categories />
            <CarouselHome />
        </>
    )
}

export default Home;