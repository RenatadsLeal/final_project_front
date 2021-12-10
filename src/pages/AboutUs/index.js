import { Helmet } from 'react-helmet-async';
import './style.scss';
import { Card, CardGroup, Container, Row, Image, Col } from 'react-bootstrap';

const AboutUs = () => {

    const creators = [
        {
            id: 1,
            name: "Ailla Freire de Azevedo",
            description: "vaquinha",
            linkGitHub: "https://github.com/AillaF",
            linkLinkedIn: "https://www.linkedin.com/in/aillafreire/",
            email: "aillaf@gmail.com",
            photo: ""
        },
        {
            id: 2,
            name: "Carolina Hakamada Montesinos",
            description: "carol haka",
            linkGitHub: "https://github.com/hakacarol",
            linkLinkedIn: "https://www.linkedin.com/in/hakacarolina/",
            email: "haka.carolina@gmail.com",
            photo: ""
        },
        {
            id: 3,
            name: "Clarissa Farencena Arruda",
            description: "clarinet",
            linkGitHub: "https://github.com/ClarissaFA",
            linkLinkedIn: "https://www.linkedin.com/in/clarissafaarruda",
            email: "cla.farencena@gmail.com",
            photo: ""
        },
        {
            id: 4,
            name: "Helena Martinez Perdigueiro",
            description: "canetinha",
            linkGitHub: "https://github.com/helenaperdigueiro",
            linkLinkedIn: "https://www.linkedin.com/in/helenaperdigueiro/",
            email: "helena.perdigueiro@gmail.com",
            photo: ""
        },
        {
            id: 5,
            name: "Renata da Silva Leal",
            description: "board games",
            linkGitHub: "https://github.com/RenatadsLeal",
            linkLinkedIn: "https://www.linkedin.com/in/renata-dsleal/",
            email: "renata.dsleal@gmail.com",
            photo: ""
        }
    ]

    return (
        <>
            <Helmet>
                <title>Vidoti's Bakery | Sobre nós</title>
            </Helmet>
            
            <div id="aboutUs">
            <Container>
            <Row>
                {creators.map(creator => {
                    return (
                        <Col xs={9} md={6} key={creator.id}>
                        <CardGroup className="cardCreator">
                    <Card className="d-flex justify-content-center align-items-center p-3 cardPhoto">
                        <Image className="photo" variant="top" src="https://images-ext-1.discordapp.net/external/Y3_dTCG9CNWQ7U3s4qG_HGvDvrnjy2trJ1omNwbiIe0/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26w%3D500/https/images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?width=440&height=660" roundedCircle alt="pessoa" />
                    </Card>
    
                    <Card >
                        <Card.Body>
                            <Card.Title>{creator.name}</Card.Title>
                            <Card.Text>
                                {creator.description}
                            </Card.Text>
                            <Card.Text><a href={creator.linkGitHub}><img className="contactIcon" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="Github icon"></img></a></Card.Text>
                            <Card.Text><a href={creator.linkLinkedIn}><img className="contactIcon" width="5" height="5" src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png" alt="LinkedIn Icon"></img></a></Card.Text>
                            <Card.Text><a href={"mailto:"+creator.email}><img className="contactIcon" src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png" alt="Mail Icon"></img></a></Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                </Col>
                    )
                })}
            
            </Row>
            </Container>
            </div>
        </>
    )
}

export default AboutUs;