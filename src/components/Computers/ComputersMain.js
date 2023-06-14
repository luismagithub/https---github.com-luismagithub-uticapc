import ComputersHeader from './ComputersHeader';
import ComputersInfo from './ComputersInfo';
import ComputersOcasion from './ComputersOcasion';

import { ComputersHeaderStyle, ComputersInfoStyle, ComputersOcasionStyle } from '../../styles/style'

const ComputersMain = () => {

    return (
        <>
            <ComputersHeaderStyle>
                <ComputersHeader/>
            </ComputersHeaderStyle>
            <ComputersInfoStyle>
                <ComputersInfo/>
            </ComputersInfoStyle>
            <ComputersOcasionStyle>
                <ComputersOcasion/>
            </ComputersOcasionStyle>
        </>
    );
};

export default ComputersMain;