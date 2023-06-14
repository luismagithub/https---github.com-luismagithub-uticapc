import Carousel from "react-bootstrap/Carousel";
import Image from 'react-bootstrap/Image';

import aboutuslogo from '../../images/aboutuslogo.jpg';
import serviceslogo from '../../images/serviceslogo.jpg';
import ordenadoreslogo from '../../images/ordenadoreslogo.jpg';

const HomeInfoCarousel = () => {

    return (      
        <Carousel variant="dark" pause="false">
            <Carousel.Item>
                <Image className="img-fluid mx-auto" src={serviceslogo} alt="Third slide"/>
                <Carousel.Caption>
                    <h2>Servicios</h2> {/* este */}
                    <h3>Ofrecemos gran variedad de servicios a nuestros clientes</h3>
                    <a href="/servicios">Echa un vistazo</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-fluid mx-auto" src={ordenadoreslogo} alt="Second slide"/>
                <Carousel.Caption>
                    <h2>PC a medida</h2>
                    <h3>Desde un pc sencillo de oficina, hasta el pc más potente</h3>
                    <a href="/ordenadores">Pide presupuesto</a>
                </Carousel.Caption>
            </Carousel.Item>        
            <Carousel.Item>
                <Image className="img-fluid mx-auto" src={aboutuslogo} alt="First slide"/>
                <Carousel.Caption>
                    <h2>Venta y reparación</h2>
                    <h3>Todo tipo de dispositivos</h3>
                    <a href="/sobrenosotros">Conócenos</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeInfoCarousel;