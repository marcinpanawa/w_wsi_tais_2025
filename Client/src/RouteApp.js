import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import About from "./Pages/About"

function RouteApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </Router>
    );
    
}

export default RouteApp;
