import './style.scss';
import { Helmet } from 'react-helmet';

const Teapot = () => {
    return (
        <div>
            <Helmet>
                <title>Vidoti's Bakery | Teapot</title>
            </Helmet>
            <h2>I'm a Teapot</h2>
            <p>Fill me out and pour me over</p>
        </div>
    )
}

export default Teapot;