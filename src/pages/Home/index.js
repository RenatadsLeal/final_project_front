import './style.scss';
import Header from '../../components/Header';
import CarouselHome from './components/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Header />
        <CarouselHome />
        <Link to={"/teapot"}>Aqui</Link>
        </>
    )
}

export default Home;