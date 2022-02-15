import React, { useEffect } from 'react'
import { BlogContainer, BlogLand } from './StyledContact';
import One from "../../assets/image/blog/1.svg"
import Two from "../../assets/image/blog/2.svg"
import Three from "../../assets/image/blog/3.svg"
import HeadFoot from '../../component/HeadFoot';
import { Input } from '../blog/StyledBlog';
import { FiSearch } from 'react-icons/fi';

const Contact = (props) => {

    useEffect(() => {
        props.setSidebar(false);
    },[]);

    return (
        <>
            <HeadFoot {...props}>
                <BlogLand>
                    <h1>The FixOnTimeBlog</h1>
                    <p>Actionable tips. Curated for you.</p>
                    <div className='searchContainer'>
                        <Input type="text" placeholder="Search" style={{background: "#F9F9F9"}}/>
                        <FiSearch className='searchIcon'/>
                    </div>
                </BlogLand>
                <BlogContainer>
                    <div className="news__container">
                        <div className="news__wrapper">
                            <div className="tabContent" id="category">
                                <div className="news__card">
                                    <div className = "image__container">
                                        <img src={One} alt="" className="news__img "/>
                                    </div>
                                    <div className="news__card__body">
                                        <p className="news__card__title">How to do home repair</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className = "image__container">
                                        <img src={Two} alt="" className="news__img "/>
                                    </div>
                                    <div className="news__card__body">
                                        <p className="news__card__title">Power safety tips at home</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className = "image__container">
                                        <img src={Three} alt="" className="news__img "/>
                                    </div>
                                    <div className="news__card__body">
                                        <p className="news__card__title">How to prevent power</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className = "image__container">
                                        <img src={One} alt="" className="news__img "/>
                                    </div>
                                    <div className="news__card__body">
                                        <p className="news__card__title">How to do home repair</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className = "image__container">
                                        <img src={Two} alt="" className="news__img "/>
                                    </div>
                                    <div className="news__card__body">
                                        <p className="news__card__title">Power safety tips at home</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className = "image__container">
                                        <img src={Three} alt="" className="news__img "/>
                                    </div>
                                    <div className="news__card__body">
                                        <p className="news__card__title">How to prevent power surge</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                        <p className="news__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                                    </div>
                                </div>
                            </div>           
                        </div>
                    </div>
                </BlogContainer>
            </HeadFoot>
        </>
    )
}

export default Contact
