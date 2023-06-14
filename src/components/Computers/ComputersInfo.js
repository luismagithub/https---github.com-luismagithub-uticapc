import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ComputersInfo = () => {

    return (
        <Container>
            <Row>
                <Col md="12">
                    <h2>Montamos tu <br/>PC <span>a medida</span></h2>
                    <p>
                        En UTICA PC disfrutamos montando nuestros equipos a medida, desde el PC de oficina más sencillo, 
                        hasta el PC gaming mas potente con refrigeración líquida.
                    </p>
                    <p>
                        Es por ello que te invitamos a visitar nuestra tienda para que veas las configuraciones de PC que te ofrecemos, basadas en nuestra experiencia, 
                        o que seas tu mismo el que elijas desde la primera a la ultima pieza del mismo en función de tu presupuesto y necesidades.
                    </p>
                    <p>
                        Todos nuestros equipos se entregan con sistema operativo y office, 
                        además de antivirus.
                    </p>
                    <p>
                        A diferencia de la competencia, donde hay que pagar por el software que los clientes piden como esencial,  nosotros ya lo incluimos en nuestros equipos 
                        SIN COSTE ADICIONAL.
                    </p>
                    <a href="/contacto">
                        <span>¿Quieres más info?</span>
                        <span>+</span>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default ComputersInfo;