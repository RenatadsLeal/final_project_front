import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import "./style.scss";
import { useParams } from "react-router-dom";

const Product = () => {
    const { idproduto } = useParams();
    // precisa mesmo ser com o id? nao pode ser com o nome do produto?

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | {idproduto}</title>
            </Helmet>
            <Header />
        </>
    )
}

export default Product;