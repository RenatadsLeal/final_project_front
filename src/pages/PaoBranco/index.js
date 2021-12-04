import './style.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const Category = () => {
    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Categorias</title>
            </Helmet>
            <Header />
            <p>Category</p>
        </>
    )
}

export default Category;