import ServicesHeader from './ServicesHeader';
import ServicesInfo from './ServicesInfo';

import { ServicesHeaderStyle, ServicesInfoStyle } from '../../styles/style'

const ServicesMain = () => {

    return (
        <>
            <ServicesHeaderStyle>
                <ServicesHeader/>
            </ServicesHeaderStyle>
            <ServicesInfoStyle>
                <ServicesInfo/>
            </ServicesInfoStyle>
        </>
    );
};

export default ServicesMain;