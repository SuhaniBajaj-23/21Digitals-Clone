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


function App() {
    return (
        <>
          <Routes>
            <Route path="/" element={
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
              </>
            }
            ></Route>
          </Routes>
        </>
      );
}

export default App;
