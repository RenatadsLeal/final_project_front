// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';

const NotFound = () => {
    // const navigate = useNavigate();

    // setTimeout(() => {
    //     navigate('/');
    // }, 5000);

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | 404</title>
            </Helmet>
            <h2>404 nada por aqui</h2>
        </>
    )
}

export default NotFound;