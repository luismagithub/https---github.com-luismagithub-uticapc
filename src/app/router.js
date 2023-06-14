import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Computers from '../pages/Computers';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>}/>
            <Route path="/contacto" element={<Contact/>}/>
            <Route path="/sobrenosotros" element={<AboutUs/>}/>
            <Route path="/servicios" element={<Services/>}/>
            <Route path="/ordenadores" element={<Computers/>}/>
            <Route path="*" element={<div style={{height: '500px', textAlign: 'center', paddingTop: '60px'}}><div style={{fontSize: '40px'}}>404</div><div style={{fontSize: '30px'}}>NOT FOUND</div></div>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;