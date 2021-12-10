import './style.scss';
import { Carousel, Row, Col, Image } from 'react-bootstrap';
import useAxios from '../../../../hooks/useAxios';
import { useContext } from 'react';
import { BasketContext } from '../../../../contexts/BasketContext';

const CarouselHome = () => {
  const products = useAxios('/product');
  console.log(products);
  // const carouselProducts = [[products[0], products[7], products[12], products[18]], [products[25], products[30], products[35], products[39]]];
  let randomIndex = Math.floor(Math.random() * products.length);

  let shuffle = array => {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }
  shuffle(products);
  let selectedProducts1 = products.slice(0, 4);
  let selectedProducts2 = products.slice(4, 8);

  const assignClassName = index => {
    if (index === 1) {
      return "d-none d-sm-block";
    } if ((index === 2) || (index === 3)) {
      return "d-none d-md-block";
    }
  }

  // console.log(selectedProducts[0].id);
  return (
    <Carousel className="photoCarousel">
      <Carousel.Item>
        <Row> 
          {
            (selectedProducts1.length !== 0) && (
              selectedProducts1.map(( { id, image }, index) => {
                return (
                  <Col className={assignClassName(index)} md={3} sm={6} key={id}>
                    <Image className="d-block w-100" src={image} alt="Slide" />
                  </Col>
                )
              })
            )
          }
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {
            (selectedProducts2.length !== 0) && (
              selectedProducts2.map(({ id, image }, index) => {
                return (
                  <Col className={assignClassName(index)} md={3} sm={6} key={id}>
                    <Image className="d-block w-100" src={image} alt="Slide" />
                  </Col>
                )
              })
            )
          }
        </Row>
      </Carousel.Item>
    </Carousel >
  )
}

export default CarouselHome;