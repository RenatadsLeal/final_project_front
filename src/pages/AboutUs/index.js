import './style.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Sobre nós</title>
            </Helmet>
            <Header />
            <p>About us</p>
        </>
    )
}

export default AboutUs;