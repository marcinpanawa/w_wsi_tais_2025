import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Basket from './Pages/Basket';
import Store2 from './Pages/Store2';
import About from "./Pages/About"
import Counter from "./Pages/Counter";
import MainLayout from "./Components/Layout/MainLayout"
import { AppContext } from './Store/AppContext';

function RouteApp(props) {
    // console.log('RouteApp',  props)
    return (
        <AppContext>
            <Router>
                <MainLayout appName={props.appName}>

                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/home" element={<Home appName="HOME" />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/store2" element={<Store2 />} />                        
                        <Route path="/basket" element={<Basket />} />                        
                        <Route path="/about" element={<About />} />
                        <Route path="/counter" element={<Counter />} />                        
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>

                </MainLayout>
            </Router>
        </AppContext>
    );

}

export default RouteApp;

