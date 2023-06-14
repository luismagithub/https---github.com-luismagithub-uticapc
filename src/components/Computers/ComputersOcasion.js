import { Col, Image, Row } from "react-bootstrap";

import lenovom700 from '../../images/lenovo-m700.jpg';
import hp800g3 from '../../images/hp-800g3.jpg';
import lenovom73 from '../../images/lenovo-m73.jpg';

const ComputersOcasion = () => {

    return (
        <>
            <h4>PCs de ocasión</h4>
            <Row>
                <Col md="4">
                    <Image src={lenovom700} alt="lenovom700"/>
                    <h5>Lenovo M700</h5>
                </Col>
                <Col md="4">
                    <Image src={hp800g3} alt="hp800g3"/>
                    <h5>HP 800 G3</h5>
                </Col>
                <Col md="4">
                    <Image src={lenovom73} alt="lenovom73"/>
                    <h5>Lenovo M73</h5>
                </Col>
            </Row>
        </>
    );
};

export default ComputersOcasion;