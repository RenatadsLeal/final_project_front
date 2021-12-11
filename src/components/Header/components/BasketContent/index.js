import './style.scss'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { BasketContext } from '../../../../contexts/BasketContext';

const BasketContent = () => {
  const { products } = useContext(BasketContext);
  console.log(products);
  console.log(products[0]);
  console.log(products[2]);
  // console.log(products.product.id);
  // console.log(products[0].id)

  return (
    products.map(({product}) => (
      <NavDropdown.Item key={product.id} as={Link} to={`/produtos/${product.id}`}>{product.title}</NavDropdown.Item>
    ))
  )
}

export default BasketContent;