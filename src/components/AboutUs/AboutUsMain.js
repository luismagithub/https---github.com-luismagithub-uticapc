import AboutUsHeader from './AboutUsHeader';
import AboutUsInfo from './AboutUsInfo';

import { AboutUsHeaderStyle, AboutUsInfoStyle } from '../../styles/style'

const AboutUsMain = () => {

    return (
        <>
            <AboutUsHeaderStyle>
                <AboutUsHeader/>
            </AboutUsHeaderStyle>
            <AboutUsInfoStyle>
                <AboutUsInfo/>
            </AboutUsInfoStyle>
        </>
    );
};

export default AboutUsMain;