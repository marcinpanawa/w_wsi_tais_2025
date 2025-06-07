import {useContext} from 'react';
import { Menu } from './Shared/Menu';
import { AuthButtons } from './Shared/AuthButtons';
import { WCAG } from './Shared/WCAG';
import { Footer } from './Shared/Footer';
import { themeDefault, ThemeContext } from "../../Store/ThemeContext";
import { CreatedAppContext } from '../../Store/AppContext';
import { LoginModal } from '../Modals/Login';
import { RegisterModal } from '../Modals/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = (props) => {
  const { AppStore, setSession, setModal } = useContext(CreatedAppContext);

  window.toast = toast;

  console.log('CreatedAppContext', AppStore)

  const loginFn = (userName, token) => {
    setSession({
      session: {
        loggedIn: true,
        userName: userName,
        token: token,
        exp: 123
      }
    })
  }

  const toggle = (modalName) => {
    if (modalName === 'login') {
      setModal({ modal: { login: false } });
    }

  }


  return (
    <>

      <WCAG />

      <div className="container">
        <ThemeContext.Provider value={themeDefault}>
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
            </div>

            <Menu />

            <AuthButtons />


          </header>
        </ThemeContext.Provider>
      </div>


      <main>
        {/* <%- include('./Partials/header') %> */}
        <h1>{props.appName ? props.appName : 'MainLayout'}</h1>




        {props.children}






      </main>
      {/* <%- include('./Partials/cookiePolicy') %>
        <%- include('./Partials/footer') %> */}
      <ThemeContext.Provider value={themeDefault}>
        <Footer />
      </ThemeContext.Provider>

      {AppStore.modal &&
        <>
          <LoginModal isOpen={AppStore.modal.login} toggle={() => toggle('login')} loginFn={(userName, token) => loginFn(userName, token)} />
          <RegisterModal isOpen={AppStore.modal.register} toggle={() => toggle('login')} loginFn={(userName, token) => loginFn(userName, token)} />
        </>
      }

    </>
  )
};



export default MainLayout;