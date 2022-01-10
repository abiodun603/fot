import React, { useEffect } from 'react'
import HeadFoot from '../../component/HeadFoot'
import {HomeContainer,HomeContent,HomePage,
    LeftSection,LeftText,ButtonTouch,LandingTitle,LandingSubTitle,RightSection,HomePic,HomeCompanyLogo,HomeAbout,HomeAboutTitle,HomeAboutSubTitle,WFE} from './HomeStyled'
function Home(props) {
    useEffect(() => {
        props.setSidebar(false);
    },[]);
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
                            <HomePic src={process.env.PUBLIC_URL + `/Image/home/pole.png`}/>
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
                </HomeContent> 
            </HomeContainer>
        </HeadFoot>
    
    </>
    )
}

export default Home
