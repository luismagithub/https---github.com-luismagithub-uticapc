import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import whatsapp from '../../images/whatsapp2.svg';

const ContactInfo = () => {

    return (
        <Container>
            <Row>
                <Col md="7">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12568.58200851794!2d-4.17038!3d38.0436959!3m2!1i1024!2i
                    768!4f13.1!3m3!1m2!1s0xd6c4f3d158fd867%3A0x9253651188c92949!2sUTICAPC!5e0!3m2!1ses!2ses!4v1680563515519!5m2!1ses!2ses" 
                    title="uticapcmap" allowFullScreen="allowFullScreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </Col>
                <Col md="5">
                    <h4>Dirección</h4>
                    <p>C/Pinocho 2<br/>23770 Marmolejo, Jaén</p>
                    <h4>Teléfono / WhatsApp</h4>
                    <p><Image src={whatsapp} width='20px'></Image><a href='tel:620949419'> 620949419</a></p>
                    <h4>Email</h4>
                    <p><a href='mailto:uticapc@gmail.com'>uticapc@gmail.com</a></p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;