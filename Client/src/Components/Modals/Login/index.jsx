import React from "react";
import {
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Modal
} from "reactstrap";
import { config } from "../../../config/index";

export const LoginModal = ({
    size,
    isOpen,
    toggle,
    loginFn,
    cancel,
    submitText = "Login",
    cancelText = "Close",
    primaryStyle = "primary",
    footerInfo,

}) => {

    const loginPostJSON = async (data) => {
        try {
            const response = await fetch(`${config.backend}${config.endpoints.login}`, {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log("Success:", result);
          return result;
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const submitFn = async () => {

        const login = document.getElementById('login').value ;
        const pass = document.getElementById('password').value 
        
        if ( login && pass ) {
            const res = await loginPostJSON({"username":login,"password":pass});
            console.log('response', res);
    
            if (res && res.token) {
                loginFn(login, res.token );
                window.toast("You are logged in!");
                toggle();
            }
        }
    
    }

    return (
        <>
            <Modal
                size={size}
                isOpen={isOpen}
                centered
            >
                <div className="color-line-modal" />
                <ModalHeader
                    toggle={toggle}
                    onClick={() => cancel ? cancel() : null}
                >
                    Login page
                </ModalHeader>
                <ModalBody className="text-center">




                    <form>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input type="text" className="form-control" id="login" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    </form>



                </ModalBody>

                <ModalFooter>
                    <div className="button-wrapper">
                        <Button
                            className="btn-accept"
                            color={primaryStyle}
                            onClick={() => submitFn()}>{submitText}
                        </Button>
                        <Button className="btn-cancel"
                            color="secondary"
                            onClick={() => toggle()}
                        >
                            {cancelText}
                        </Button>
                    </div>
                </ModalFooter>


                {footerInfo && (
                    <div className="card-footer bg-white">
                        <i className="fa fa-info-circle text-primary"></i>&nbsp;&nbsp;Pozycje oznaczone <span className="required">*</span> są wymagane.
                    </div>
                )}
            </Modal>
        </>
    );


}