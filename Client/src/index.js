import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteApp from './RouteApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteApp aappName="ABC" />
  </React.StrictMode>
);
