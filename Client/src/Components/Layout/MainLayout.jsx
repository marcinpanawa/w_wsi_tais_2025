import React from 'react'
import { Menu } from './Shared/Menu';
import { AuthButtons } from './Shared/AuthButtons';
import { WCAG } from './Shared/WCAG';
import { Footer } from './Shared/Footer';


const MainLayout = (props) => (

    
        <>
        {/* <%- include('./Partials/wcag_helper') %> */}
        <WCAG />
        <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
      </div>
      {/* <%- include('./Menu') %> */}
      <Menu />
      {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
    <li><a href="/store" className="nav-link px-2">Store</a></li>
    <li><a href="#" className="nav-link px-2">Pricing</a></li>
    <li><a href="#" className="nav-link px-2">FAQs</a></li>
    <li><a href="/about" className="nav-link px-2">About</a></li>
  </ul> */}

      {/* <%- include('./authButtons') %> */}
      <AuthButtons />
      {/* <div className="col-md-3 text-end">

    {(props.session && props.session.userId)?
      <a className="button btn btn-outline-danger me-2" href="/logout">Logout {props.session.userName}</a>
      :
      <>
      <a className="button btn btn-outline-primary me-2" href="/login">Login</a>
      <a className="button btn btn-primary me-2" href="/register">Sign-up</a>
      </>

    }

  </div> */}
  
    </header>
  </div>

  
        <main>
        {/* <%- include('./Partials/header') %> */}
        <h1>{props.appName?props.appName:'MainLayout'}</h1>
        {props.children}

        </main>
        {/* <%- include('./Partials/cookiePolicy') %>
        <%- include('./Partials/footer') %> */}
        <Footer />
        </>
    );



export default MainLayout;