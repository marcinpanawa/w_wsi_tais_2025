import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from "./Pages/About"
import MainLayout from "./Components/Layout/MainLayout"

function RouteApp(props) {
    // console.log('RouteApp',  props)
    return (
        <MainLayout appName={props.appName}>
            <Router>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/store" element={<Store />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path='*' element={<ErrorPage />}/>
                </Routes>
            </Router>
        </MainLayout>
    );
    
}

export default RouteApp;
