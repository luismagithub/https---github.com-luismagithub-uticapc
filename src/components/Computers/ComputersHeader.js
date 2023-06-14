import { Col, Row } from "react-bootstrap";

const ComputersHeader = () => {

    return (
        <Row>
            <Col md="12">
                <h1 className="featurette-heading fw-normal lh-1">PC a medida</h1>
                <h4 className="featurette-heading fw-normal lh-1">Windows, Office y antivirus incluidos</h4>
            </Col>
        </Row>
    );
};

export default ComputersHeader;