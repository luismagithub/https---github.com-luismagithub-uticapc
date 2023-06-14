import HomeInfo from "./HomeInfo";
import HomeInfoCarousel from "./HomeInfoCarousel";
import HomeServices from "./HomeServices";
import HomeCompanies from "./HomeCompanies";

import { HomeInfoStyle, HomeInfoCarouselStyle, HomeCompaniesStyle, HomeServicesStyle } from "../../styles/style";

const HomeMain = () => {

    return (
        <>
            <HomeInfoCarouselStyle>
                <HomeInfoCarousel/>
            </HomeInfoCarouselStyle>
            <HomeInfoStyle>
                <HomeInfo/>
            </HomeInfoStyle>
            <HomeServicesStyle>
                <HomeServices/>
            </HomeServicesStyle>
            <HomeCompaniesStyle>
                <HomeCompanies/>
            </HomeCompaniesStyle>
        </>
    );
};

export default HomeMain;