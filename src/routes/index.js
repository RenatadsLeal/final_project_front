import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import Teapot from '../pages/Teapot';

const RouteList = () => {
    return (
    <BrowserRouter>
        <nav>
            <Link to="/">Ir para a Home</Link><br />
            {/* <Link to="/lmaoclost/Aulas_CTD">Link para um repositório existente</Link> */}
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />   
            <Route path="/teapot" element={<Teapot />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    )
};

export default RouteList;