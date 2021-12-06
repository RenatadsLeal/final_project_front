import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Products from '../pages/Products';
import Product from '../pages/Product';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import Teapot from '../pages/Teapot';

const RouteList = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias/:nomecategoria" element={<Category />} />
            {/* Como fazer dar 404 aqui */}
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:idproduto" element={<Product />} />     
            <Route path="/teapot" element={<Teapot />} />
            <Route path="/sobrenos" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    );

export default RouteList;