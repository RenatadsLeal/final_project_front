import './style.scss';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Teapot = () => {
    return (
        <div id="teapot" className ="d-flex justify-content-end align-items-center">
            <Helmet>
                <title>Vidoti's Bakery | Teapot</title>
            </Helmet>
            <div className="me-5">
            <h2>418 | I'm a teapot</h2>
            <p>The server refuses the attempt to brew coffee with a teapot.</p>
            <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Teapot;