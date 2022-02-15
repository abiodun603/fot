import React, { useEffect, useState } from 'react'
import HeadFoot from '../../component/HeadFoot'
import {HomeContainer,HomeContent,HomePage,
    LeftSection,LeftText,ButtonTouch,LandingTitle,LandingSubTitle,RightSection,HomePic,
    HomeCompanyLogo,HomeAbout,HomeAboutTitle,HomeAboutSubTitle,WFE,HomeService,HomeTest, ArrowLeft,HomeConnected} from './HomeStyled'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import { landingCarousel,solutionCarousel } from '../../component/data/data';
import {HomeQuoteWrapper,HomeQuoteContainer, Button} from "./HomeStyled.js";
import Brand from '../../component/brand/Brand';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Autoplay,Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Autoplay,Navigation,Pagination]);


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
        autoplaySpeed: 7000,
        ltr: true,
        arrows:false,
    }



    const swiper = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        // Default parameters
        slidesPerView: 2,
        spaceBetween: 300,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          834: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 942px
          942: {
            slidesPerView: 2,
            spaceBetween: 100
          },
          // when window width is >= 1100px
          1100: {
            slidesPerView: 2,
            spaceBetween: 250
          }
        }
      };


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
                            <Swiper 
                            pagination={true} 
                            modules={[Pagination,Autoplay]} 
                            slidesPerView={1}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                              }} 
                              className='solution_slider'
                             >
                                <SwiperSlide className='solution_body'>
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
                                </SwiperSlide>
                                <SwiperSlide className='solution_body'>
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
                                </SwiperSlide>
                                <SwiperSlide className='solution_body'>
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
                                </SwiperSlide>

                            </Swiper>

                            
                        </div>
                    </HomeService>
                    <HomeTest>
                        <div className='home_test_title'>What our clients say</div>
                        <div className='home_test_subtitle'>Our work speaks for itself</div>
                        <Swiper className='test_card'
                            {...swiper}
                            navigation={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                              }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={swiper => console.log(swiper)}
                            modules={[ Autoplay,Navigation]}
                        >
                            <SwiperSlide className='card_item'>
                                <img src={process.env.PUBLIC_URL + `/Image/home/comment.svg`} width="20px" className='comment_icon'/>
                                    <div className='card_center'>
                                        <div className='testimony'>Are you ready to buy state-of-the-art products from 
                                            original equipment manufacturers? As accredited vendors, 
                                            we help you purchase electrical power. 
                                        </div>
                                        <div className="person_img">
                                            <img src={process.env.PUBLIC_URL + `/Image/home/atik.jpg `}  />
                                        </div>
                                        <div className='person_detail'>
                                            <p>Ayomide Akinyemi</p>
                                            <span>CEO Kedco</span>
                                        </div>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className='card_item'>
                                <img src={process.env.PUBLIC_URL + `/Image/home/comment.svg`} width="20px" className='comment_icon'/>
                                    <div className='card_center'>
                                        <div className='testimony'>Are you ready to buy state-of-the-art products from 
                                            original equipment manufacturers? As accredited vendors, 
                                            we help you purchase electrical power. 
                                        </div>
                                        <div className="person_img">
                                            <img src={process.env.PUBLIC_URL + `/Image/home/atik.jpg `}  />
                                        </div>
                                        <div className='person_detail'>
                                            <p>Ayomide Akinyemi</p>
                                            <span>CEO Kedco</span>
                                        </div>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className='card_item'>
                                <img src={process.env.PUBLIC_URL + `/Image/home/comment.svg`} width="20px" className='comment_icon'/>
                                    <div className='card_center'>
                                        <div className='testimony'>Are you ready to buy state-of-the-art products from 
                                            original equipment manufacturers? As accredited vendors, 
                                            we help you purchase electrical power. 
                                        </div>
                                        <div className="person_img">
                                            <img src={process.env.PUBLIC_URL + `/Image/home/atik.jpg `}  />
                                        </div>
                                        <div className='person_detail'>
                                            <p>Ayomide Akinyemi</p>
                                            <span>CEO Kedco</span>
                                        </div>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className='card_item'>
                                <img src={process.env.PUBLIC_URL + `/Image/home/comment.svg`} width="20px" className='comment_icon'/>
                                    <div className='card_center'>
                                        <div className='testimony'>Are you ready to buy state-of-the-art products from 
                                            original equipment manufacturers? As accredited vendors, 
                                            we help you purchase electrical power. 
                                        </div>
                                        <div className="person_img">
                                            <img src={process.env.PUBLIC_URL + `/Image/home/atik.jpg `}  />
                                        </div>
                                        <div className='person_detail'>
                                            <p>Ayomide Akinyemi</p>
                                            <span>CEO Kedco</span>
                                        </div>
                                    </div>
                            </SwiperSlide>
                        </Swiper>
                    </HomeTest>
                    <Brand/>
                    <HomeQuoteWrapper>
                        <HomeQuoteContainer>
                            <h3>Get quotation for free</h3>
                            <p>Work with our experts and save up to 40% when you get your<br/>electrical equipment</p>
                            <Button style={{display:"flex",alignItems:'center',justifyContent:'center',background: "white", color: "#030762", width: 170, borderRadius: 10}}>
                                Get in touch
                            </Button>
                        </HomeQuoteContainer>                       
                    </HomeQuoteWrapper>
                    <HomeConnected>
                        <h3>Stay Connected</h3>
                        <p>
                            Be the first to know when we release new episode of Blog<br/>
                            post, add new product and News letter
                        </p>
                        <div className='subscribe'>
                            <input type="text" placeholder="Enter you email address" />
                            <button>Subscribe</button>
                        </div>
                    </HomeConnected>
                </HomeContent> 
            </HomeContainer>
        </HeadFoot>
    </>
    )
}

export default Home
