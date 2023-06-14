import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import o2 from '../../images/o2.jpg';
import digi from '../../images/digi.png';
import vodafone from '../../images/vodafone.png';
import lowi from '../../images/lowi.png';

import pepephone from '../../images/pepephone.png';
import masmovil from '../../images/masmovil.png';
import lebara from '../../images/lebara.png';
import lyca from '../../images/lyca.png';

import orange from '../../images/orange.png';
import simyo from '../../images/simyo.png';
import jazztel from '../../images/jazztel.png';

const HomeCompanies = () => {

    return (
        <Container>
            <h4 className="featurette-heading fw-normal lh-1">Algunas de nuestras compañias</h4>
            <Carousel variant="dark" pause='hover'>
                <Carousel.Item>
                    <Image className="img-fluid mx-auto" src={o2} alt="First slide"/>
                    <Image className="img-fluid mx-auto" src={digi} alt="First slide"/>
                    <Image className="img-fluid mx-auto" src={lowi} alt="First slide"/>
                    <Image className="img-fluid mx-auto" src={vodafone} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="img-fluid mx-auto" src={lebara} alt="Second slide"/>
                    <Image className="img-fluid mx-auto" src={lyca} alt="Second slide"/>
                    <Image className="img-fluid mx-auto" src={pepephone} alt="Second slide"/>
                    <Image className="img-fluid mx-auto" src={masmovil} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="img-fluid mx-auto" src={jazztel} alt="Third slide"/>
                    <Image className="img-fluid mx-auto" src={orange} alt="Third slide"/>
                    <Image className="img-fluid mx-auto" src={simyo} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default HomeCompanies;