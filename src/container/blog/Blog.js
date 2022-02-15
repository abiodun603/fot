import React, {useEffect} from 'react'
import HeadFoot from '../../component/HeadFoot'
import {ContactLand, BlogBanner, BlogForm, BlogWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button, Textarea, Contact, ContactDesc, WorkContainer, WorkTitle, WorkHourContainer, WorkHour, WorkWrapper} from "./StyledBlog"
import address from "../../assets/image/contact/address.svg"
import phone from "../../assets/image/contact/phone.svg"
import mail from "../../assets/image/contact/mail.svg"
import customer from "../../assets/image/contact/customer.svg"
import contact from "../../assets/image/contact/contact-hr.svg"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import pole from "../../assets/image/about/pole.svg";


const Blog = (props) => {
    useEffect(() => {
        props.setSidebar(false);
    },[]);

    return (
        <>
            <HeadFoot {...props}>
                <ContactLand>
                    <h1>Contact Us</h1>
                    <p>Need help with something? Reach out to us!</p>
                </ContactLand>

                <BlogWrapper>
                    <BlogBanner>
                        <p>Let's work together; we'd love<br/> to hear from you</p>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={address} alt=""/>
                                </span>
                                <p>Address</p>
                            </ContactDesc> 
                            <p>
                                6, Charity Road (1st Floor), New<br/>Oko-Oba, Lagos
                            </p>
                        </Contact>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={phone} alt="" />
                                </span>
                                <p>Telephone</p>
                            </ContactDesc>  
                            <p>07012223256</p>
                        </Contact>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={mail} alt="" />
                                </span>
                                <p>Email</p>
                            </ContactDesc>  
                            <p>info@fixontime.com</p>
                        </Contact>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={customer} alt="" />
                                </span>
                                <p>Customer Support</p>
                            </ContactDesc>  
                            <Button style={{background: "white", color: "#030762", width: 170, borderRadius: 10}}>
                                Open live chat
                            </Button>
                        </Contact>
                    </BlogBanner>
                    <FormWrapper>
                        <BlogForm>
                            <h2>Request a service</h2>
                            <FromBx>
                                <span>Email Address</span>
                                <Input type = "text" placeholder = "" />
                            </FromBx>

                            <FromBx>
                                <span>Company</span>
                                <Input type = "text" placeholder = "" />
                            </FromBx>

                            <FromBx>
                                <span>Subject</span>
                                <Input type = "text" placeholder = "" />
                            </FromBx>

                            <FromBx>
                                <span>Message</span>
                                <Textarea row="30" col="20" placeholder = "" />
                            </FromBx>

                            <FromBx>
                                <Button>Submit Request
                                    <HiOutlineArrowNarrowRight/>
                                </Button>
                            </FromBx>
                        </BlogForm>
                    </FormWrapper>
                </BlogWrapper>

                <Work/>
            </HeadFoot>
        </>
    )
}

export default Blog

const Work = () => {
    return (
        <>
            <WorkWrapper>
                <WorkContainer>
                    <img src={contact} alt=""/>
                    
                    <WorkTitle>
                        <h2>Work Hours</h2>
                        <p>lorem pisum dolar sit amet, connecttur adipising <br/>elit, Preltium non amet lcoreet volupat nih <br/> rutrum pretium</p>
                    </WorkTitle>

                    <WorkHourContainer>
                        <WorkHour>
                            <span>Monday-Saturday</span>
                            <p>08.00am - 06:00pm</p>
                        </WorkHour>

                        <WorkHour>
                            <span>Sunday</span>
                            <p>07.00am - 07:00pm</p>
                        </WorkHour>

                        <WorkHour>
                            <span>Emergency on call basis</span>
                            <p>24hr/7days</p>
                        </WorkHour>
                    </WorkHourContainer>
                </WorkContainer>
            </WorkWrapper>
            
        </>
    )
}
