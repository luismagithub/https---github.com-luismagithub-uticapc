import styled, { createGlobalStyle } from "styled-components";

import aboutuslogo from '../images/aboutuslogo.jpg';
import serviceslogo from '../images/serviceslogo.jpg';
import ordenadoreslogo from '../images/ordenadoreslogo.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'worksans', sans-serif;
        margin: 0;
        padding: 0;
    }

    .sticky {
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .sticky img {
        width: 150px;
    }

    #root {
        margin: 0 auto;
    }
`;

export const HeaderStyle = styled.header`
    img {
        width: 250px;
    }

    .navbar-brand {
        padding-left: 50px;
    }

    .navbar-toggler {
        border-color: rgb(0,0,0,0%);
        color: rgb(0,0,0,0%);
    }

    .navbar-collapse {
        padding-left: 40px;
    }

    

    .nav-link {
        margin-left: 17px;
        color: #1d1c1c;
        font-size: 17px;
        line-height: 26px;
        font-style: normal;
        font-weight: 900;
    }

    .nav-link:hover {
        color: #F27E00;
        transition-duration: 0.2s;
    }

    @media (max-width: 990px) {
        .navbar-collapse {
            padding-left: 10px;
        }
    }

    @media (max-width: 767px) {
        img {
            width: 150px;
        }

        .navbar-brand {
            padding-left: 15px;
        }
    }
`;

export const HomeMainStyle = styled.main`    
    max-width: 2000px;
    min-height: 1227px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 767px) {
        .col-md-4 {
            padding-top: 25px;
        }
    }
`;

export const HomeInfoStyle = styled.div`
    padding: 65px;
    text-align: center;

    h2 {
        color: #191919;
        font-family: 'worksans-bold';
        font-size: 40px;
        line-height: 48px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -2px;
        text-transform: none;
    }

    h2 span {
        font-family: 'worksans-bold';
        color: #F27E00;
    }

    p {
        color: #666666;
        font-size: 15px;
        line-height: 26px;
        font-style: normal;
        font-weight: 400;
    }

    .wrapper {
        padding-top: 20px;
        padding-right: 250px;
        padding-left: 250px;
    }

    @media (max-width: 1067px) {
        .wrapper {
            padding-right: 100px;
            padding-left: 100px;
        }
    }

    @media (max-width: 767px) {
        padding: 15px;
        padding-top: 35px;

        .wrapper {
            padding-right: 50px;
            padding-left: 50px;
        }

        .container {
            padding-left: 20px;
            padding-right: 20px;
        }
        h2 {
            font-size: 30px;
        }
    }

    @media (max-width: 567px) {
        .wrapper {
            padding-right: 0px;
            padding-left: 0px;
        }
    }

    @media (max-width: 992px) {
        .container {
            padding-left: 0px;
            padding-right: 0px;
        }
    }
`;

export const HomeInfoCarouselStyle = styled.div`
    text-align: center;
    opacity: 0.75;

    img {
        width: 100%;
        opacity: 1;
        filter: brightness(0.70);
    }

    .carousel-caption {
        color: white;
        padding-bottom: 145px;
    }

    .carousel-caption h2 {
        font-family: 'worksans-bold';
        font-size: 50px;
        line-height: 50px;
        font-weight: 700;
        letter-spacing: -2px;
        text-transform: uppercase;
        text-shadow: 0px 0px 1px black;
    }

    .carousel-caption h3 {
        font-family: 'worksans-bold';
        font-size: 20px;
        line-height: 30px;
        font-weight: 500;
        text-shadow: 0px 0px 1px black;
        padding-bottom: 20px;
    }

    .carousel-caption a{
        background-color: #F27E00;
        font-size: 16px;
        line-height: 31px;
        padding: 20px;
        padding-left: 45px;
        padding-right: 45px;
        text-decoration: none;
        color: white;
        font-weight: 600;
        box-shadow: 0px 0px 1px black;
    }

    .carousel-caption a:hover{
        background-color: white;
        color: gray;
        transition: 0.35s;
    }

    @media (max-width: 1535px) {
        .carousel-caption {
            padding-bottom: 85px;
        }

        .carousel-caption h2 {
            font-size: 35px;
        }
    }

    @media (max-width: 1324px) {
        .carousel-caption {
            padding-bottom: 55px;
        }

        .carousel-caption h2 {
            font-size: 25px;
        }

        .carousel-caption h3 {
            font-size: 15px;
        }

        img {
            height: 260px;
        }

        .carousel-caption a{
            padding: 15px;
            font-size: 14px;
        }
    }
`;

export const HomeServicesStyle = styled.div`
    h2 {
        color: #191919;
        font-family: 'worksans-bold';
        font-size: 40px;
        line-height: 48px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -2px;
        text-transform: none;
    }

    h3 {
        color: rgb(25, 25, 25);
        font-family: worksans-bold;
        font-size: 25px;
        line-height: 30px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -1px;
        text-transform: none;
    }

    p {
        color: #666666;
        font-size: 15px;
        line-height: 26px;
        font-style: normal;
        font-weight: 400;
    }

    .col-md-6 {
        background-color: #F6F6F6;
        padding: 120px;
        width: 50% auto !important;
    }

    .img-service {
        text-align: center;
        background-color: grey;
    }

    .row {
        margin-left: 0.01px;
        width: 100%;
    }

    @media (max-width: 767px) {
        .row {
            border-bottom: 1px solid #666666;
        }
    }
`;

export const HomeCompaniesStyle = styled.div`
    .container {
        padding-top: 135px;
        text-align: center;
        padding-bottom: 135px;
    }

    h4 {
        font-size: 25px;
        line-height: 24px;
        font-style: normal;
        font-weight: 800;
        letter-spacing: -1px;
    }

    .carousel-item {
        padding-top: 20px;
    }

    .carousel-item img{
        width: 200px;
        padding: 40px;
    }

    .carousel-control-prev {
        padding-right: 120px;
    }

    .carousel-control-next {
        padding-left: 120px;
    }

    .carousel-inner {
        text-align: center;
    }

    @media (max-width: 767px) {
        h4 {
            font-size: 20px;
        }
    }
`;

export const ContactMainStyle = styled.main`
    max-width: 2000px;
    min-height: 927px;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
`;

export const ContactInfoStyle = styled.div`
    background-color: #F6F6F6;

    iframe {
        width: 100%;
        height: 400px;
        border-radius: 10px;
    }

    h4 {
        font-size: 25px;
        line-height: 24px;
        font-style: normal;
        font-weight: 800;
        letter-spacing: -1px;
    }

    p {
        font-size: 20px;  //15px
        line-height: 28px;
        font-style: normal;
        font-weight: 600;
        padding-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #212529;
    }

    a:hover {
        color: gray;
        transition: 0.35s;
    }

    .col-md-7 {  
        padding: 30px;
    }

    .col-md-5 {  
        padding: 60px;
    }
`;

export const ContactFormStyle = styled.div`
    .container {
        padding-top: 90px;
        padding-bottom: 90px;
        padding-left: 320px;
        padding-right: 320px;
    }

    h3 {
        letter-spacing: -2px;
    }

    label {
        letter-spacing: -1px;
    }

    textarea {
        height: 120px;
    }

    button {
        background-color: #F27E00;
        border-color: white;
    }

    button:hover {
        background-color: white;
        color: gray;
        transition: 0.35s;
        border-color: gray;
    }

    @media (max-width: 992px) {
        .container {
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    @media (max-width: 767px) {
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`;

export const FooterStyle = styled.footer`
    background-color: #F1F1F1;
    padding: 110px;
    width: 100%;
    margin: 0 auto;

    h5 {
        letter-spacing: -0.6px;
        line-height: 27px;
        font-weight: 700;
    }

    p {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: #777777;
        padding-top: 10px;
        font-size: 16Fpx;
        letter-spacing: -0.5px;
        line-height: 25px;
        font-weight: 400;
        text-transform: none;
        font-style: normal;
        padding-bottom: 3px;
    }

    a {
        text-decoration: none;
        color: #777777;
    }

    .col-md-6:nth-child(1) div a {
        background-color: #F27E00;
        padding: 10px;
        border-radius: 25px;
    }

    .col-md-6:nth-child(1) div a:hover {
        background-color: #d46f02;
        transition: 0.35s;
    }

    .col-md-6:nth-child(2) {
        padding-left: 60px;
    }

    @media (max-width: 767px) {
        padding: 80px;

        .col-md-6:nth-child(1) {
            padding-left: 0px;
            padding-bottom: 40px;
        }
        .col-md-6:nth-child(2) {
            padding-left: 0px;
        }
    }
`;

export const AboutUsHeaderStyle = styled.div`
    background: url(${aboutuslogo}) no-repeat;
    
    .row {
        width: 100%; 
    }

    .col-md-12 {
        padding: 165px;
    }

    h1 {
        font-family: 'worksans-bold';
        font-size: 70px;
        line-height: 80px;
        font-weight: 700;
        letter-spacing: -4.2px;
        color: white;
    }

    h4 {
        color: #bfbfbf;
        font-family: 'worksans-bold';
        font-size: 20px;
        line-height: 24px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -1px;
        text-transform: none;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 60px;
        }
        .col-md-12 {
            padding: 125px;
        }
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 40px;
        }
        .col-md-12 {
            padding: 85px;
        }
    }
`;

export const AboutUsInfoStyle = styled.div`
    .row {
        width: 100%;
        padding-top: 110px;
        padding-bottom: 110px;
    }

    .col-md-6:nth-child(1) {
        padding-right: 30px;
    }

    .col-md-6:nth-child(2) {
        padding-left: 30px;
    }

    h2 {
        color: #191919;
        font-family: 'worksans-bold';
        font-size: 40px;
        line-height: 48px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -2px;
        text-transform: none;
        padding-bottom: 20px;
    }

    p {
        color: #666666;
        font-size: 15px;
        line-height: 26px;
        font-style: normal;
        font-weight: 400;
    }

    p:nth-child(4) {
        padding-bottom: 30px;
    }

    a {
        background-color: #F27E00;
        color: white;
        padding: 16px;
        text-decoration: none;
        border-radius: 15px;
        border-style: solid;
        border-width: 1px;
        border-color: #F27E00;
    }

    a:hover {
        background-color: white;
        color: gray;
        border-style: solid;
        border-width: 1px;
        border-color: gray;
        transition: 0.15s;
        border-radius: 15px;
    }

    span:nth-child(1) {
        font-size: 14px;
        padding: 10px;
    }

    span:nth-child(2) {
        font-size: 16px;
        padding: 5px;
    }

    @media (max-width: 992px) {
        .container {
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    @media (max-width: 767px) {
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }
        h2 {
            font-size: 30px;
        }
        .col-md-6:nth-child(1) {
            padding-bottom: 80px;
            padding-right: 0px;
        }
        .col-md-6:nth-child(2) {
            padding-left: 15px;
        }
        .row {
            padding-top: 40px;
            padding-bottom: 40px;
        }  
    }
`;

export const AboutUsMainStyle = styled.main`   
    max-width: 2000px;
    min-height: 1227px;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
`;

export const ServicesHeaderStyle = styled.div`
    background: url(${serviceslogo}) no-repeat;
    
    .row {
        width: 100%; 
    }

    .col-md-12 {
        padding: 165px;
    }

    h1 {
        font-family: 'worksans-bold';
        color: white;
        font-size: 70px;
        line-height: 80px;
        font-weight: 700;
        letter-spacing: -4.2px;
    }

    h4 {
        color: white;
        font-family: 'worksans-bold';
        font-size: 20px;
        line-height: 24px;
        font-style: normal;
        letter-spacing: -1px;
        text-transform: none;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 60px;
        }
        .col-md-12 {
            padding: 125px;
        }
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 40px;
        }
        .col-md-12 {
            padding: 85px;
        }
    }
`;

export const ServicesInfoStyle = styled.div`
    padding-top: 110px;

    h2 {
        font-family: 'worksans-bold';
        color: #191919;
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        letter-spacing: -2px;
        padding-bottom: 25px;
    }

    h2 span {
        color: #F27E00;
        font-family: 'worksans-bold';
    }

    h3 {
        color: #191919;
        font-family: 'worksans-bold';
        font-size: 25px;
        line-height: 30px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -1px;
        text-transform: none;
    }

    p {
        color: #666666;
        font-size: 15px;
        line-height: 26px;
        font-style: normal;
        font-weight: 400;
    }

    @media (max-width: 992px) {
        .container {
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    @media (max-width: 767px) {
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }
        h2 {
            font-size: 30px;
        }
    }
`;

export const ServicesMainStyle = styled.main`   
    max-width: 2000px;
    min-height: 1227px;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 80px;
`;

export const ComputersHeaderStyle = styled.div`   
    background: url(${ordenadoreslogo}) no-repeat;

    .row {
        width: 100%; 
    }

    .col-md-12 {
        padding: 165px;
    }

    h1 {
        font-family: 'worksans-bold';
        font-size: 70px;
        line-height: 80px;
        font-weight: 700;
        letter-spacing: -4.2px;
        color: white;
    }

    h4 {
        color: white;
        font-family: 'worksans-bold';
        font-size: 20px;
        line-height: 24px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -1px;
        text-transform: none;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 60px;
        }
        .col-md-12 {
            padding: 125px;
        }
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 40px;
        }
        .col-md-12 {
            padding: 85px;
        }
    }
`;

export const ComputersInfoStyle = styled.div`  
    .container {
        text-align: center;
        padding-top: 90px;
        padding-left: 180px;
        padding-right: 180px;
        padding-bottom: 40px;
    }

    h2 {
        font-family: 'worksans-bold';
        color: #191919;
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        letter-spacing: -2px;
    }

    h2 {
        padding-bottom: 25px;
    }

    h2 span {
        color: #F27E00;
        font-family: 'worksans-bold';
    }

    p {
        color: #666666;
        font-size: 15px;
        line-height: 26px;
        font-style: normal;
        font-weight: 400;
        padding-bottom: 6px;
    }

    p:nth-child(5) {
        padding-bottom: 32px;
    }

    a {
        background-color: #F27E00;
        color: white;
        padding: 16px;
        text-decoration: none;
        border-radius: 15px;
        border-style: solid;
        border-width: 1px;
        border-color: #F27E00;
    }

    a:hover {
        background-color: white;
        color: gray;
        border-style: solid;
        border-width: 1px;
        border-color: gray;
        transition: 0.15s;
        border-radius: 15px;
    }

    a span:nth-child(1) {
        font-size: 14px;
        padding: 10px;
    }

    a span:nth-child(2) {
        font-size: 16px;
        padding: 5px;
    }

    @media (max-width: 992px) {
        .container {
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    @media (max-width: 767px) {
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }
        h2 {
            font-size: 30px;
        }
    }
`;

export const ComputersOcasionStyle = styled.div`   
    padding-top: 40px;

    h4 {
        font-family: 'worksans-bold';
        color: #191919;
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        letter-spacing: -2px;
        padding-left: 160px;
        padding-top: 40px;
    }

    .row {
        width: 100%;
        text-align: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .col-md-4:nth-child(1) img {
        width: 350px;
    }

    .col-md-4:nth-child(2) img {
        width: 350px;
    }

    .col-md-4:nth-child(3) img {
        padding-top: 60px;
        padding-bottom: 35px;
        width: 250px;
    }

    h5 {
        color: #191919;
        font-size: 16px;
        line-height: 20px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -0.6px;
        text-transform: none;
    }

    @media (max-width: 767px) {
        h4 {
            padding-left: 60px;
        }
    }
`;

export const ComputersMainStyle = styled.main`   
    max-width: 2000px;
    min-height: 1227px;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 80px;
`;

