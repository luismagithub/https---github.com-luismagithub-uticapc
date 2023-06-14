import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

import whatsapp from '../images/whatsapp2.svg';
import instagram from '../images/instagram.svg';

const Footer = () => {

    return (
        <Container>
            <Row>
                <Col md="6">
                    <h5>Tu tienda de informática en Marmolejo</h5>
                    <p>
                        En un mundo donde cada vez mas público se plantea comprar prácticamente todo 
                        a través de internet, y donde únicamente parece importar el precio mas bajo 
                        como único argumento de compra, nosotros siempre hemos apostado por el camino 
                        alternativo, al ofrecer el valor añadido que supone dar <b>asesoramiento 
                        personalizado</b> a nuestros clientes. Te esperamos en UTICA PC tu tienda de 
                        informática en Marmolejo.
                    </p>
                    <div>
                        <a href='https://www.instagram.com/utica.pc/' rel='noreferrer' target='_blank'>
                            <Image src={instagram} alt='instagram' width='20px'></Image>
                        </a>
                    </div>
                </Col>
                <Col md="6">
                    <h5>Contacto</h5>
                    <p>C/Pinocho 2 <br/> 23770 Marmolejo, Jaén <br/> <Image src={whatsapp} alt='whatsapp' width='20px'></Image><a href='tel:620949419'> 620 94 94 19</a> <br/> <a href='mailto:uticapc@gmail.com'>uticapc@gmail.com</a></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;