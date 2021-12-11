// import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Products from '../pages/Products';
import Product from '../pages/Product';
import AboutUs from '../pages/AboutUs';
import Basket from '../pages/Basket';
import NotFound from '../pages/NotFound';
import Teapot from '../pages/Teapot';
import { HelmetProvider } from 'react-helmet-async';
import BasketContextProvider from '../contexts/BasketContext';

const RouteList = () => (
    <BrowserRouter>
    {/* <ScrollToTop /> */}
    <HelmetProvider>
        <BasketContextProvider>
    <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias/:nomecategoria" element={<Category />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:idproduto" element={<Product />} />    
            <Route path="/teapot" element={<Teapot />} />
            <Route path="/sobrenos" element={<AboutUs />} />
            <Route path="/cesta" element={<Basket />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BasketContextProvider>
        </HelmetProvider>
    </BrowserRouter>
    );

export default RouteList;