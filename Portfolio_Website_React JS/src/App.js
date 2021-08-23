import React from 'react';
import './App.css';
import './Employee.css';
import 'antd/dist/antd.css';
import './index.scss'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Products from './components/Products';

import Employee from './contents/Employee';
//import Product from './contents/Product';



function App() {
  return (
    <Router>
     
    <div className="App">
    <Navbar />
    
    <Route exact path="/">
    <Home />
    </Route>


    <Route exact path="/Employee">
    <Employee />
    </Route>


    <Route exact path="/Products">
    <Products />
    </Route>


    <Route path="/about">
    <About />
    </Route>


    <Route path="/education">
    <Education />
    </Route>


    <Route path="/skills">
    <Skills />
    </Route>


    <Route path="/contact">
    <Contact />
    </Route>

    
    
    </div>
    </Router>
    );
  }
  
  export default App;
  