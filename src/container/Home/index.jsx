import React, { useEffect, useState } from 'react'
import HeadFoot from '../../component/HeadFoot'
import {HomeContainer,HomeContent,HomePage,
    LeftSection,LeftText,ButtonTouch,LandingTitle,LandingSubTitle,RightSection,HomePic,
    HomeCompanyLogo,HomeAbout,HomeAboutTitle,HomeAboutSubTitle,WFE,HomeService,HomeTest} from './HomeStyled'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import { landingCarousel } from '../../component/data/data';
function Home(props) {
    useEffect(() => {
        props.setSidebar(false);
    },[]);

    const [slider, setSlider] = useState({});
  
      const setCarousel = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        ltr: true,
        arrows:false,
        

    }

    // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    //     <ArrowStyle {...props}>
    //         <ArrowLeft color="#000"/>
    //     </ArrowStyle>
    //   );
    
    //   const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    //     <ArrowRightStyle {...props}>
    //         <ArrowRight />
    //     </ArrowRightStyle>
    //   );

    // const settingSlider = {
    //     dots: false,
    //     infinite: false,
    //     speed: 100,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     prevArrow: <SlickArrowLeft />,
    //     nextArrow: <SlickArrowRight />,
    //     responsive: [{
    //         breakpoint: 1240,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           centerMode: false,
    //         }
    //       },
    //       {
    //         breakpoint: 900,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             centerMode: false
    //         }
    //       },
    //       {
    //         breakpoint: 750,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             centerMode: false
    //         }
    //       },
    //       {
    //         breakpoint: 530,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: false
    //         }
    //       },
    //     ]
    //   };
    return (
        <>
        <HeadFoot {...props}>
            <HomeContainer>
                <HomeContent>
                    <HomePage>
                        <LeftSection>
                            <LeftText>
                                <LandingTitle>
                                Protect your electricity distribution 
                                assets and improve power reliability. 
                                </LandingTitle> 
                                <LandingSubTitle>
                                    Reduce trippings and outages on your electricity network.
                                </LandingSubTitle> 
                                <ButtonTouch>Get In touch</ButtonTouch>
                            </LeftText>
                        </LeftSection>
                        <RightSection>
                            
                            <div className='carousel_content'>
                                <Slider {...setCarousel}>
                                    
                                        {landingCarousel.map((item) => (
                                            <HomePic src={process.env.PUBLIC_URL + `/Image/home/${item.image}`}/>
                                        ))}
                                    
                                </Slider>
                            </div>
                            
                        </RightSection>
                    </HomePage>
                    <HomeCompanyLogo>
                        <img src={process.env.PUBLIC_URL + `/Image/companylogo/nojapower.svg`} />
                        <img src={process.env.PUBLIC_URL + `/Image/companylogo/lucyelect.svg`} />
                        <img src={process.env.PUBLIC_URL + `/Image/companylogo/repl.svg`} />
                    </HomeCompanyLogo>
                    <HomeAbout>
                        <HomeAboutTitle>
                            We are distribution network contractors and power system automation professionals. 
                        </HomeAboutTitle>
                        <HomeAboutSubTitle>
                            FixOnTime is a leading engineering, procurement, and construction company approved to carry 
                            out electrical engineering works and use our solutions within the Nigerian Electricity Supply Industry. We have  strong design experience, and 
                            we are leaders in sourcing equipment that brings solutions to electrical challenges. 
                        </HomeAboutSubTitle>
                        <WFE>
                            <div className="wfe_title">
                                Why FixOnTime Electric? 
                            </div>
                            <div className='wfe_body'>
                                <div className='wfe_left_section'>
                                    <div className='wfe_text'>
                                        <div className='wfe_header'>
                                            Efficient and excellent service
                                        </div>
                                        <div className='wfe_subheader'>
                                            Our technicians are professionals trained 
                                            to give you quality services. Enjoy prompt services and solutions. 
                                        </div> 
                                    </div>
                                    <div className='wfe_text'>
                                        <div className='wfe_header'>
                                            Unparalleled support
                                        </div>
                                        <div className='wfe_subheader'>
                                            We have a team committed to supporting you. We do this by training your team on how to use all
                                            the equipment we supply or install. It doesn't get better than that. 
                                        </div> 
                                    </div>
                                    <div className='wfe_text'>
                                        <div className='wfe_header'>
                                            Smart Solutions 
                                        </div>
                                        <div className='wfe_subheader'>
                                            We know how important it is for your distribution 
                                            network to be fully operational. Our smart solutions make this possible. 
                                        </div> 
                                    </div>
                                </div>
                                <div className='wfe_right_section'>
                                    <img src={process.env.PUBLIC_URL + `/Image/home/team_support.svg`} />
                                </div>
                            </div>
                        </WFE>
                    </HomeAbout>
                    <HomeService>
                        <div className='home_service_title'>
                            <div className='home_text'>
                                Solutions just for you 
                            </div>
                            <img src={process.env.PUBLIC_URL + `/Image/home/thunder.svg`} />
                        </div>
                        <div className='solution_info'>
                            <img src={process.env.PUBLIC_URL + `/Image/home/servicepic.svg`} />
                            <div className='solution_body'>
                                <div className='solution_title'>Electrical Installations</div>
                                <div className='solution_subtitle'>
                                    You cannot afford to have installations done wrong. Do not put your 
                                    personnel, equipment, and entire distribution network in the hands of 
                                    amateurs. Work with our experts to implement your projects up to 330KV 
                                    Substation installations. 
                                </div>
                                <div className='solution_subtitle' style={{marginTop:'20px'}}>
                                    We have comprehensive training on how to install 
                                    state-of-the-art electrical equipment. 
                                </div>
                                <button className='btn_touch'>Get intouch</button>
                            </div>
                        </div>
                    </HomeService>
                    <HomeTest>
                        <div className='home_test_title'>What our clients say</div>
                        <div className='home_test_subtitle'>Our work speaks for itself</div>
                        <div>

                        </div>
                    </HomeTest>
                </HomeContent> 
            </HomeContainer>
        </HeadFoot>
    
    </>
    )
}

export default Home
