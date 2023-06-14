import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";

import reparacionblanco from '../../images/reparacionblanco.png';
import fibrablanco from '../../images/fibrablanco.png';
import recargablanco from '../../images/recargablanco.png';

const HomeServices = () => {

    return (
        <>
                <Row>
                    <Col md="6">
                        <h3 className="featurette-heading fw-normal lh-1">Reparaciones</h3>
                        <p className="lead">Arreglamos ordenadores, portátiles, <br/> moviles, tablets, consolas ...</p>
                    </Col>
                    <Col md="6" className="img-service">
                        <Image className="img-fluid mx-auto" src={reparacionblanco} alt="reparacion"/>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="img-service">
                        <Image className="img-fluid mx-auto" src={fibrablanco} alt="fibra"/>
                    </Col>
                    <Col md="6">
                        <h3 className="featurette-heading fw-normal lh-1">Fibra e Internet</h3>
                        <p className="lead">Encuentra las mejores ofertas <br/> en fibra e internet actualmente</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <h3 className="featurette-heading fw-normal lh-1">Recargas</h3>
                        <p className="lead">Añade el saldo que quieras a tu móvil <br/> y activa tu tarifa</p>
                    </Col>
                    <Col md="6" className="img-service">
                        <Image className="img-fluid mx-auto" src={recargablanco} alt="recarga"/>
                    </Col>
                </Row>
        </>
    );
};

export default HomeServices;