import './style.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const Product = () => {
    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Produtos</title>
            </Helmet>
            <Header />
            <p>Product</p>
        </>
    )
}

export default Product;