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

  return products.length ? (
      //esse product pode ser qq nome?
    products.map(({product}) => (
      <NavDropdown.Item key={product.id} as={Link} to={`/product/${product.title}`}>{product.title}</NavDropdown.Item>
    ))
  ) : (
    <NavDropdown.Item><img id="cartLogo" src="https://cdn-icons.flaticon.com/png/512/3133/premium/3133039.png?token=exp=1638998431~hmac=691e367dfdf6060bedb77e894e271b52" alt="carrinho"></img> </NavDropdown.Item>
  )
}

export default BasketContent;