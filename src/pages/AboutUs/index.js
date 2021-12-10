import { Helmet } from 'react-helmet-async';
import './style.scss';
import { Card, CardGroup, Container, Row, Image } from 'react-bootstrap';

const AboutUs = () => {


    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Sobre nós</title>
            </Helmet>
            
            <div id="aboutUs">
            <Container>
            <Row>
            <CardGroup>
                <Card >
                    <Image variant="top" src="https://images-ext-1.discordapp.net/external/Y3_dTCG9CNWQ7U3s4qG_HGvDvrnjy2trJ1omNwbiIe0/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26w%3D500/https/images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?width=440&height=660" roundedCircle alt="pessoa" />
                </Card>

                <Card >
                    <Card.Body>
                        <Card.Title>Nome</Card.Title>
                        <Card.Text>
                            Descricao
                        </Card.Text>
                        <img id="cartLogo" src="https://cdn-icons.flaticon.com/png/512/3133/premium/3133039.png?token=exp=1638998431~hmac=691e367dfdf6060bedb77e894e271b52" alt="Icone GitHub"></img> 
                    </Card.Body>
                </Card>
            </CardGroup>
            </Row>
            </Container>
            </div>
        </>
    )
}

export default AboutUs;