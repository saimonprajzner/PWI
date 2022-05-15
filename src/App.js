import './App.css';
import Navbar from "./components/Navbar";
import Photos from "./components/Photos"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Background} from "./components/Background";
import Home from "./components/Home";
import {homeObj1} from "./components/Home/data";
import React from 'react'
import Charts from "./components/Chart";


function App() {
    return (
       <Background>
            <Router>
                <Navbar/>
              <Routes>
                  <Route path="" element ={<Home {...homeObj1}/>}/>
                  <Route path="/photos" element={<Photos/>}/>
                  <Route path="/plot" element={<Charts/>}/>
              </Routes>
            </Router>
       </Background>

    );
}

export default App;
