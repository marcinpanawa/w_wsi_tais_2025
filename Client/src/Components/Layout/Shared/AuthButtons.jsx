import { useContext } from "react";
import { CreatedAppContext } from '../../../Store/AppContext';

export const AuthButtons = (props) => {
     const { AppStore, setModal, setSession }  = useContext(CreatedAppContext);

    const openLogin=()=> setModal({modal:{login:true}})
    const openRegister=()=> setModal({modal:{register:true}})
    const looseLogin=()=> setSession({session:{}});
   
    console.log(AppStore)
    return (
    <div className="col-md-3 text-end">
        {AppStore.session.loggedIn ?
            <a className="button btn btn-outline-danger me-2" onClick={()=>looseLogin()}>Logout {AppStore.session.userName}</a>
            :
            <>
                <a onClick={() => openLogin()} className="button btn btn-outline-primary me-2" >Login</a>
                <a onClick={() => openRegister()} className="button btn btn-primary me-2" >Sign-up</a>
            </>

        }
    </div>
)
}