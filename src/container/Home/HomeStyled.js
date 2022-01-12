import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {SIZES,COLORS} from '../../constant/index';

export const HomeContainer = styled.div`
    position: relative;  
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const HomePage = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 514px;
    padding-right: ${SIZES.padding};
    background-repeat:no-repeat;
    background-size: cover;
    background: #DEDFF1;
    @media screen and (max-width:1120px){
        width: 100%;
        padding-right: 0;
    }
    @media screen and (max-width: 890px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 475px){
        padding-left: 0px;
        padding-right: 0px;
     }

    
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    max-width: 1240px;
    height: 100%;
    background:url(${process.env.PUBLIC_URL + `/Image/home/wire.png`});
    background-repeat:no-repeat;
    background-size: cover;
    @media screen and (max-width:1120px){
        width: 100%;
        margin-right: 0;
    }
    

`;
export const LeftText = styled.div`
      padding: ${SIZES.padding};
      @media screen and (max-width: 600px){
        padding: 50px;
    }
    @media screen and (max-width: 600px){
        padding: 20px;
    }
`;

export const LandingTitle = styled.div`
    font-size: ${SIZES.h3};
    font-weight: 600;
    color: ${COLORS.white};
    max-width: 610px;
    margin-bottom: 40px;
    @media screen and (max-width: 890px){
        font-size: 36px;
    }
    @media screen and (max-width: 475px){
        font-size: 29px;   
        max-width: 350px;
        display: flex;
        justify-self: center;
        flex-wrap:wrap;
        margin-left:40px;
    }

  
`;

export const LandingSubTitle = styled.div`
    font-size: 18px;
    color: ${COLORS.white};
    margin-bottom: 36px;
    @media screen and (max-width: 890px){
        font-size: 24px;
    }
    @media screen and (max-width: 475px){
        font-size: 20px;   
        max-width: 350px;
        display: flex;
        justify-self: center;
        flex-wrap:wrap;
        margin-left:40px;
    }

`;

export const ButtonTouch = styled.button`
    background: ${COLORS.red};
    border:none;
    outline: none !important;
    width: 160px;
    height: 45px;
    border-radius: 10px;
    color: #fff;
`;


export const RightSection = styled.div`
    display:block;
    width: 400px;
    max-height: 514px;
    
    margin-top: 73px;
    position: relative;
    box-sizing: border-box;

    @media screen and (max-width:1120px){
        display:none;
      }

      .carousel_content {
          height: 100%;
      }

      .carousel_items {
        display: flex;
        flex-direction: row;
        position: relative;
      }

    

`;

export const HomePic = styled.img`
    width: 442px;
    height: 369px;
   
`;

export const HomeCompanyLogo = styled.div`
    display:flex;
    background:#F9F9F9;
    justify-content:center;
    padding: 22px 0;
    img{
        @media screen and (max-width: 600px){
            width:100px;
        }
        @media screen and (max-width: 455px){
            width:50px;
        }
    }
    img:nth-child(2) {
        margin:0 67px;
        
    }


`;

export const HomeAbout = styled.div`
    padding-right: ${SIZES.padding};
    padding-left: ${SIZES.padding};
    display:flex;
    flex-direction: column;
    padding-top: 103px;

    @media screen and (max-width:660px){
        padding-right: 50px;
        padding-left: 50px;
    }
`;

export const HomeAboutTitle = styled.div`
    font-weight: 600;
    font-size: 48px;
    max-width:990px;
    line-height: 132.69%;
    text-align: center;
    align-self: center;
    color: #030762;
    @media screen and (max-width: 815px){
        font-size: 36px;
    }
    @media screen and (max-width: 537px){
        font-size: 24px;
    }
`;
export const HomeAboutSubTitle = styled.div`
    font-size: 16px;
    text-align: center;
    color: #505050;
    align-self: center;
    max-width: 719px;
    margin-top: 17px;
    margin-bottom: 170px;
`;

export const WFE = styled.div`
    display:flex;
    flex-direction: column;

    .wfe_title{
        font-weight: 600;
        font-size: ${SIZES.h4};
        color: ${COLORS.blue};
    }


    .wfe_body {
        display:flex;
        justify-content: space-between;

        @media screen and (max-width: 1074px){
            flex-direction: column;
        }
    }

    .wfe_left_section{
        margin-top: 49px;
        max-width: 538px;

        @media screen and (max-width: 1182px){
            max-width: 400px;
        }
        @media screen and (max-width: 1074px){
            max-width: 100vh;
        }
    }

    .wfe_text{
        padding-left: 63px;
        border-left: 2px solid #F0F0F0;
        padding-top: 10px;
        padding-bottom: 20px;
        @media screen and (max-width:415px){
            padding-left: 30px;
        }
        &:hover {
            border-left: 2px solid ${COLORS.red};
            .wfe_header{
                color: ${COLORS.blue};
            }
            .wfe_subheader{
                color: ${COLORS.lightgray};
            }
        }
    }

    .wfe_header{
        font-weight: bold;
        font-size: 18px;
        color: #A8A8A8;
    }

    .wfe_subheader {
        font-size: 18px;
        color: #A8A8A8;
    }

    .wfe_right_section{
        max-width: 543px;
        img {
            width: 100%;
        }
    }

`;

export const HomeService = styled.div`
    display:flex;
    flex-direction:column;
    .home_service_title {
        display:flex;
        flex-direction:row;
        position: relative;
        justify-content:center;
        margin-top: 100px;
        margin-bottom: 92px;
    }
    .home_service_title .home_text {
        display:flex;
        align-self:flex-end;
        font-size: 48px;
        color: #030762;
        text-align:center;
        font-weight: 600;

        @media screen and (max-width: 600px){
            font-size: 36px;
        }
       
    }
    .home_service_title img {
        position: absolute;
        right: 10%;
        bottom:10%;
        

        @media screen and (max-width: 759px){
            bottom -10%;
        }

    }

    .solution_info {
       
       display:flex;
        background: #F9F9F9;
        width:100%;
        height: 100%;

        @media screen and (max-width: 1047px){
            flex-direction: column;
            align-items:center;
            justify-content:center;
        }

    
    }

    .solution_info img {
        @media screen and (max-width: 1047px){
            height:400px;
            padding-top: 30px;

        }

        @media screen and (max-width: 500px){
            width: 90%;

        }

    }

    .solution_body {
        margin-top:100px;
        margin-bottom:50px;
        margin-left: 87px;
        margin-right: 99px;
        @media screen and (max-width: 1205px){
            margin-left:20px;
        }
        @media screen and (max-width: 1120px){
            margin-right: 20px;
        }


    }
    .solution_title {
        font-weight: 600;
        font-size: 36px;
        color: #030762;

    }
    .btn_touch {
        width: 150px;
        height: 50px;
        background: #030762;
        border-radius: 6px;
        color: #fff;
        border:none;
        outline: none !important;
        cursor:pointer;
        margin-top: 38px;
    }

    .solution_subtitle{
        max-width: 535px;
    }
`;
export const HomeTest = styled.div`
    width:100%;
    height: 637px;
    padding-top: 104px;
    background: url(${process.env.PUBLIC_URL + `/Image/home/testimonialBg.svg`});

    .home_test_title {
        font-weight: 600;
        font-size: 48px;
        line-height: 132.69%;
        text-align: center;
        color: #FFFFFF;
    }

    .home_test_subtitle {
        font-size: 24px;
        line-height: 137.2%;
        text-align: center;
        color: #FFFFFF;
    }

    `;