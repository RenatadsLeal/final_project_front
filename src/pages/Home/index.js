import './style.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import CarouselHome from './components/Carousel';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Home</title>
            </Helmet>
            <Header />
            <CarouselHome />
        </>
    )
}

export default Home;