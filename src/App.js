import React,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route,Switch } from 'react-router-dom';
import GlobalStyles from './component/GlobalStyled';
import Description from './container/Description';
import Products from './container/Products';
import Elearning from './container/e-learning';
import Home from './container/Home';
import Service from './container/Service';
import Blog from './container/blog/Blog';
import About from './container/about/About';
import Contact from './container/contact/Contact';



function App() 
        {
            const [sidebar, setSidebar] = useState(false);
            return (
                <>
                    {/* <Blog sidebar={sidebar} setSidebar={setSidebar} /> */}
                    <GlobalStyles sidebar={sidebar} />
                        <Router>
                                <Route path="/" exact>
                                        <Contact sidebar={sidebar} setSidebar={setSidebar} />
                                </Route>
                                <Route path="/description">
                                        <Description sidebar={sidebar} setSidebar={setSidebar} />
                                </Route>
                                <Route path="/products">
                                        <Products sidebar={sidebar} setSidebar={setSidebar} />
                                </Route>
                                <Route path="/elearn">
                                        <Elearning sidebar={sidebar} setSidebar={setSidebar} />
                                </Route>
                                <Route path="/about">
                                        <About sidebar={sidebar} setSidebar={setSidebar} />
                                </Route>
                                <Route path="/blog">
                                        <Blog sidebar={sidebar} setSidebar={setSidebar} />
                                </Route>
                                <Route path="/service">
                                        <Service sidebar={sidebar} setSidebar={setSidebar} />
                                </Route>
                        </Router>
                </>        
            );
        }

export default App;
