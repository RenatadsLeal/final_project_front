import './style.scss';
import { Carousel, Row, Col, Image } from 'react-bootstrap';
import useAxios from '../../../../hooks/useAxios';
import { Link } from 'react-router-dom';

const CarouselHome = () => {
  const products = useAxios('/product');
  // let randomIndex = Math.floor(Math.random() * products.length);

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
  let selectedProducts1 = products.slice(0, 5);
  let selectedProducts2 = products.slice(5, 10);

  // const assignClassName = index => {
  //   if (index === 1) {
  //     return "d-none d-sm-block";
  //   } if ((index === 2) || (index === 3)) {
  //     return "d-none d-md-block";
  //   }
  // }

  const assignClassName = index => {
    if (index === 1) {
      return "d-none d-sm-block";
    } if (index === 2) {
      return "d-none d-md-block";
    } if (index === 3) {
      return "d-none d-lg-block";
    } if (index === 4) {
      return "d-none d-xl-block";
    }
  }

  return (

    <Carousel>
      
      <Carousel.Item>
        
          <Row className="p-3 g-0 d-flex justify-content-center">
            {
              (selectedProducts1.length !== 0) && (
                selectedProducts1.map(({ id, image }, index) => {
                  return (
                    <Col className={`${assignClassName(index)}`} xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
                      <Link to={`/produtos/${id}`}><Image className="p-3 photoCarousel d-block w-100" src={image} alt="Slide" /></Link>
                    </Col>
                  )
                })
              )
            }
          </Row>
      </Carousel.Item>
       
      <Carousel.Item>
          <Row className="p-3 g-0 d-flex justify-content-center">
            {
              (selectedProducts2.length !== 0) && (
                selectedProducts2.map(({ id, image }, index) => {
                  return (
                    <Col className={`${assignClassName(index)}`} xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
                      <Link to={`/produtos/${id}`}><Image className="p-3 photoCarousel d-block w-100" src={image} alt="Slide" /></Link>
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