import './style.scss';
import { Helmet } from 'react-helmet-async';
import CarouselHome from './components/Carousel';
import Categories from './components/Categories';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Home</title>
            </Helmet>
            
            <div id="banner">

            </div>

            <Categories />
            <CarouselHome />
        </>
    )
}

export default Home;