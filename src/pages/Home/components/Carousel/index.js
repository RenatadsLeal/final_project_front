import './style.scss';
import { Carousel, Row, Col, Image } from 'react-bootstrap';



const CarouselHome = () => {
  return (
        <Carousel>
      <Carousel.Item>
        <Row>
          <Col md={3} sm={6}>
            <Image
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJyZWFkJTIwZmlsbGVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt="Second slide"  
            />
          </Col>
          <Col md={3} sm={6} className="d-none d-sm-block">
            <Image
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Second slide"  
            />
          </Col>
          <Col md={3} sm={6} className="d-none d-md-block">
            <Image
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1593415015123-42f7e3601388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Second slide"  
            />
          </Col>
          <Col md={3} sm={6} className="d-none d-md-block">
            <Image
              className="d-block w-100"
              src="https://images-ext-2.discordapp.net/external/7SIYW9pQP5R4Kn4AqckcMD74zPBt-rpRM1H4Rv7Iars/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1974%26q%3D80/https/images.unsplash.com/photo-1587540556482-5b22ea6a1b8f?width=602&height=903"
              alt="Second slide"  
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={3} sm={6}>
            <img
              className="d-block w-100"
              src="https://images-ext-1.discordapp.net/external/EduHnxWOx3b9Pq6njamZDsC4rTNvoHRPJaamQUFDkUc/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26w%3D500/https/images.pexels.com/photos/5984603/pexels-photo-5984603.jpeg?width=632&height=903"
              alt="Second slide"  
            />
          </Col>
          <Col md={3} sm={6} className="d-none d-sm-block">
            <img
              className="d-block w-100"
              src="https://images-ext-2.discordapp.net/external/raevsPVegAtcqTcny9A1yTW9rO0a67-cTiehK--F3KA/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260/https/images.pexels.com/photos/1510685/pexels-photo-1510685.jpeg?width=698&height=903"
              alt="Second slide"  
            />
          </Col>
          <Col md={3} sm={6} className="d-none d-md-block">
            <img
              className="d-block w-100"
              src="https://images-ext-2.discordapp.net/external/7qxx1FZEPJgiGX8WAZ6NUNkQYoSFNqc6Av9PD7SRDCw/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26w%3D500/https/images.pexels.com/photos/4828307/pexels-photo-4828307.jpeg?width=602&height=903"
              alt="Second slide"  
            />
          </Col>
          <Col md={3} sm={6} className="d-none d-md-block">
            <img
              className="d-block w-100"
              src="https://images-ext-1.discordapp.net/external/kFCvSJLZsVgrTLvNJHe0DzAbZulSmZHOgogmY0W4HCE/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26w%3D500/https/images.pexels.com/photos/6605210/pexels-photo-6605210.jpeg?width=602&height=903"
              alt="Second slide"  
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome;