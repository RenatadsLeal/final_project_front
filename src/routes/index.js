import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Product from '../pages/Product';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import Teapot from '../pages/Teapot';

const RouteList = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Category />} />
            <Route path="/produto" element={<Product />} />   
            <Route path="/teapot" element={<Teapot />} />
            <Route path="/sobrenos" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    );

export default RouteList;