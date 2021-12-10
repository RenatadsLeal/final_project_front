import useAxios from '../../hooks/useAxios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import { Helmet } from 'react-helmet';
import './style.scss';

const Basket = () => {
    const products = useAxios('/product');
    const [total, setTotal] = useState(0);
    const { addProduct, deleteProduct } = useContext(BasketContext)

    useEffect(() => {
        Total()
    },[addProduct])

    function Total() {
       
       

    }

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Carrinho</title>
            </Helmet>
        </>

    )

}

export default Basket;