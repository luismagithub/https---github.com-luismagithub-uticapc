import { Col, Container, Image, Row } from "react-bootstrap";

import tienda from '../../images/tienda.jpg';
import tienda2 from '../../images/tienda2.png';
import tienda3 from '../../images/tienda3.jpg';

const AboutUsInfo = () => {

    return (
        <Container>
            <Row>
                <Col md="6">
                    <h2 className="featurette-heading fw-normal lh-1">Contigo desde 2013</h2>
                    <p>
                        UTICA PC nació en el 2013 con el objetivo de dar <b>soluciones 
                        informáticas</b> de todo tipo tanto a particulares como a pymes.
                    </p>
                    <p>
                        Desde el momento que arrancó nuestra andadura tuvimos muy claro lo complicado de competir solo y exclusivamente a base de 
                        precio con las compañías líder de internet. Por ello nuestro objetivo ha sido siempre dar un <b>precio razonable</b> en base a dar 
                        un valor añadido a nuestros productos y servicios prestados en forma de <b>asesoramiento</b> preventa y <b>soporte técnico</b> post venta, 
                        con el objetivo de ofrecer a nuestros clientes aquello que más se adapte a sus necesidades y presupuesto y fidelizarles a base 
                        de ofrecerles asesoramiento constante y un soporte técnico rápido y eficaz.
                    </p>
                    <p>
                        Visita nuestra sección de servicios para conocer todo lo que podemos ofrecerte.
                    </p>
                    <a href="/servicios" target="_self">
	                    <span>Ver servicios</span>
                        <span>+</span>	
                    </a>
                </Col>
                <Col md="6">
                    <Image className="img-fluid mx-auto" src={tienda2} alt="tienda"/>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Image className="img-fluid mx-auto" src={tienda} alt="tienda"/>
                </Col>
                <Col md="6">
                    <Image className="img-fluid mx-auto" src={tienda3} alt="tienda"/>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUsInfo;