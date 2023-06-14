import Container from "react-bootstrap/Container";

const HomeInfo = () => {

    return (
        <Container>
            <h2>Nos gusta tratar</h2> 
            <h2>contigo de <span>tu a tú</span></h2>
            <div className="wrapper">
                <p>En un mundo donde parece que se tiende a comprar todo a través de internet, 
                y donde cada vez parece importar únicamente el precio se deja de lado el trato personal y el servicio 
                de asesoramiento que te ofrece tu tienda de barrio, nosotros siempre hemos apostado por el camino 
                alternativo de ofrecer esa <strong>atención personalizada</strong> a nuestros clientes.</p>
                <p>Visita nuestra <strong>tienda de informática</strong> y compruébalo por ti mismo. Estaremos encantados de recibirte 
                para proponerte la solución informática que más se adapte a tus necesidades.</p>
            </div>
        </Container>
    );
};

export default HomeInfo;