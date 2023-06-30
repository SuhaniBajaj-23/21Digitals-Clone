import React from 'react';
import "./App.css"
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Workcase from './components/Workcase';

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
              </>
            }
            ></Route>
          </Routes>
        </>
      );
}

export default App;
