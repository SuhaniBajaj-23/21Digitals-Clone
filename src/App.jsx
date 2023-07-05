import React from 'react';
import "./App.css"
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Workcase from './components/Workcase';
import Choose from './components/Choose';
import Feedback from './components/Feedback';
import Connect from './components/Connect';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import WhoAreWe from './components/WhoAreWe';
import CardRow from './components/CardRow';
import Sponsers from './components/Sponsers';
import Result from './components/Result';
import Join from './components/Join';
import Form from './components/Form';
import ContactConnect from "./components/ContactConnect";
import Map from "./components/Map";
import Creative from "./components/Creative";
import Filter from "./components/Filter";

const App=()=> {
    return (
        <>
          <Routes>
            <Route exact path="/" element={
              <>
                <Navbar/>
                <Landing/>
                <AboutUs/>
                <Services/>
                <Workcase/>
                <Choose/>
                <Feedback/>
                <Connect/>
                <Blog/>
                <Subscribe/>
                <Footer/>
              </>
            }
            ></Route>
            <Route exact path="/about" element={
              <>
              <Navbar/>
              <AboutUsPage/>
              <WhoAreWe/>
              <CardRow/>
              <Sponsers/>
              <Result/>
              <Join/>
              <Footer/>
              </>
            }
            ></Route>
            <Route exact path="/contact" element={
              <>
              <Navbar/>
              <Form/>
              <ContactConnect/>
              <Map/>
              <Footer/>
              </>
            }
            ></Route>
            <Route exact path="/blogs" element={
              <>
              <Navbar/>
              <Creative/>
              <Filter/>
              <Footer/>
              </>
            }
            ></Route>
            
          </Routes>
        </>
      );
}

export default App;
