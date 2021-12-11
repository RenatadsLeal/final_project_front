import { Helmet } from 'react-helmet-async';
import './style.scss';
import { Card, CardGroup, Container, Row, Image, Col } from 'react-bootstrap';
import carolina from './carolina.jpeg';
import clarissa from './clarissa.jpg';
import helena from './helena.jpg';
import ailla from './ailla.jpeg';
import renata from './renata.jpeg';

const AboutUs = () => {

    const creators = [
        {
            id: 1,
            name: "Ailla Freire",
            description: "Sabe fazer doces medievais e tatuagem de henna, é designer gráfica, UX/UI e estudante de Desenvolvimento fullstack na Digital House",
            linkGitHub: "https://github.com/AillaF",
            linkLinkedIn: "https://www.linkedin.com/in/aillafreire/",
            email: "aillaf@gmail.com",
            photo: ailla
        },
        {
            id: 2,
            name: "Carolina Hakamada",
            description: "Estilista de fantasias de carnaval feitas a mão e degustadora oficial dos pães da Vidoti's Bakery, é arquiteta e aluna Tech Developer da Digital House",
            linkGitHub: "https://github.com/hakacarol",
            linkLinkedIn: "https://www.linkedin.com/in/hakacarolina/",
            email: "haka.carolina@gmail.com",
            photo: carolina
        },
        {
            id: 3,
            name: "Clarissa Arruda",
            description: "Amante da natureza, gosta de inventar na culinária, é publicitária e estuda desenvolvimento de software na Digital House",
            linkGitHub: "https://github.com/ClarissaFA",
            linkLinkedIn: "https://www.linkedin.com/in/clarissafaarruda",
            email: "cla.farencena@gmail.com",
            photo: clarissa
        },
        {
            id: 4,
            name: "Helena Perdigueiro",
            description: "Expert em alongamentos, ensinou seus 4 cachorros a guardar roupas, é personal trainer e Desenvolvedora de software em formação na Digital House",
            linkGitHub: "https://github.com/helenaperdigueiro",
            linkLinkedIn: "https://www.linkedin.com/in/helenaperdigueiro/",
            email: "helena.perdigueiro@gmail.com",
            photo: helena
        },
        {
            id: 5,
            name: "Renata Leal",
            description: "Especialista em board games e colecionadora de habilidades gourmet, é designer de interiores e aluna do Certified Tech Developer da Digital House",
            linkGitHub: "https://github.com/RenatadsLeal",
            linkLinkedIn: "https://www.linkedin.com/in/renata-dsleal/",
            email: "renata.dsleal@gmail.com",
            photo: renata
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
                                <Col xs={12} md={8} lg={6} key={creator.id}>
                                    <CardGroup className="cardCreator align-items-center">
                                        <Card className="d-flex justify-content-center align-items-center p-3 cardPhoto">
                                            <Image className="photo" variant="top" src={creator.photo} roundedCircle alt="Foto do desenvolvedor" />
                                        </Card>
                                        <Col xs={12} md={8} lg={6} key={creator.id}>

                                            <Card >
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{creator.name}</Card.Title>
                                                    <Card.Text>{creator.description}</Card.Text>
                                                    <Card.Text className="d-flex justify-content-center p-2"><a href={creator.linkGitHub}><img className="contactIcon m-2" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="Github icon"></img></a>
                                                        <a href={creator.linkLinkedIn}><img className="contactIcon m-2" width="5" height="5" src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png" alt="LinkedIn Icon"></img></a>
                                                        <a href={"mailto:" + creator.email}><img className="contactIcon m-2" src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png" alt="Mail Icon"></img></a></Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
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