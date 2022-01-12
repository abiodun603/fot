import React,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route,Switch } from 'react-router-dom';
import GlobalStyles from './component/GlobalStyled';
import Description from './container/Description';
import Products from './container/Products';
import Elearning from './container/e-learning';
import Home from './container/Home';
import Service from './container/Service';
import About from './container/About';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() 
        {
                const [sidebar, setSidebar] = useState(false);
            
                return (
                                <>
                                        <GlobalStyles sidebar={sidebar} />
                                        <Router>
                                                
                                                <Route path="/description">
                                                        <Description sidebar={sidebar} setSidebar={setSidebar} />
                                                </Route>
                                                <Route path="/products">
                                                        <Products sidebar={sidebar} setSidebar={setSidebar} />
                                                </Route>
                                                <Route path="/elearn">
                                                        <Elearning sidebar={sidebar} setSidebar={setSidebar} />
                                                </Route>
                                                <Route path="/" exact>
                                                        <Home sidebar={sidebar} setSidebar={setSidebar} />
                                                </Route>
                                                <Route path="/service">
                                                        <Service sidebar={sidebar} setSidebar={setSidebar} />
                                                </Route>
                                                <Route path="/about">
                                                        <About sidebar={sidebar} setSidebar={setSidebar} />
                                                </Route>
                                                
                                        </Router>
                                </>
                               
                    
                                
                        );
        }

export default App;
