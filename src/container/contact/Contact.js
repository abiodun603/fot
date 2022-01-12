import React, { useEffect } from 'react'
import { BlogContainer } from './StyledContact';
import pole from "../../assets/image/about/pole.svg"
import HeadFoot from '../../component/HeadFoot';

const Contact = (props) => {

    useEffect(() => {
        props.setSidebar(false);
    },[]);

    return (
        <>
            <HeadFoot {...props}>
                <BlogContainer>
                    <div className="news__container">
                        <div className="news__wrapper">
                            <div className="tabContent" id="category">
                                <div className="news__card">
                                    <img src={pole} alt="" className="news__img "/>
                                    <div className="news__card__body">
                                        <p className="news__card__title">How to do home repair</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                    </div>
                                </div>
                                {/* <div className="news__card">
                                    <img src={pole} alt="" className=" news__img "/>
                                    <div className="news__card__body">
                                        <p className="news__card__title">Students were on a trip Jakarta, Indonesia</p>
                                        <p className="news__card__time">By Admin, on Nov 23th, 2020  |   1 days ago</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                        <a href="#" className="news__card__read"> Read More </a>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <img src={pole} alt="" className=" news__img "/>
                                    <div className="news__card__body">
                                        <p className="news__card__title">Students were on a trip Jakarta, Indonesia</p>
                                        <p className="news__card__time">By Admin, on Nov 23th, 2020  |   1 days ago</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                        <a href="#" className="news__card__read"> Read More </a>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <img src={pole} alt="" className=" news__img "/>
                                    <div className="news__card__body">
                                        <p className="news__card__title">Students were on a trip Jakarta, Indonesia</p>
                                        <p className="news__card__time">By Admin, on Nov 23th, 2020  |   1 days ago</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                        <a href="#" className="news__card__read"> Read More </a>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <img src={pole} alt="" className=" news__img "/>
                                    <div className="news__card__body">
                                        <p className="news__card__title">Students were on a trip Jakarta, Indonesia</p>
                                        <p className="news__card__time">By Admin, on Nov 23th, 2020  |   1 days ago</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                        <a href="#" className="news__card__read"> Read More </a>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <img src={pole} alt="" className=" news__img "/>
                                    <div className="news__card__body">
                                        <p className="news__card__title">Students were on a trip Jakarta, Indonesia</p>
                                        <p className="news__card__time">By Admin, on Nov 23th, 2020  |   1 days ago</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                        <a href="#" className="news__card__read"> Read More </a>
                                    </div>
                                </div> */}
                            </div>           
                        </div>
                    </div>
                </BlogContainer>
            </HeadFoot>
        </>
    )
}

export default Contact
