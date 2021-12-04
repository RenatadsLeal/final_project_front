import './style.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import CarouselHome from './components/Carousel';
import Categories from './components/Categories';

const Home = () => {
    return (
        <>
        <Header />
        <div id="banner">

        </div>
            <Helmet>
                <title>Vidoti's Bakery | Home</title>
            </Helmet>
            <Categories />
            <CarouselHome />
        </>
    )
}

export default Home;