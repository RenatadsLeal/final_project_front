import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

const NotFound = () => {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(timer => --timer)
            if (timer === 0) {
                navigate('/')
            }
        }, 1000);

        return () => clearInterval(intervalId)
    }, [navigate, timer])

    return (
        <div id="notFound" className="d-flex justify-content-end align-items-center">
            <Helmet>
                <title>Vidoti's Bakery | 404</title>
            </Helmet>
            <div className="me-5">
                <h2>404 | nada por aqui :(</h2>
                <p>Voltando para Home enquanto a massa descansa</p>
                <h2>{timer}</h2>
            </div>

        </div>
    )
}

export default NotFound;