import React, { Component } from "react";
import "../css/LoginPage.css";
import Dummy from "../Pages/dummy";

// const { Kakao} = window;

function LoginPage (props) {
    console.log(process.env.REACT_APP_DB_HOST)
    const { isOpen, close } = props; 
        
    return (
      <>
        {isOpen ? (
          <div className="modal">
            <div onClick={close}>
              <div className="loginModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="modalContents" onClick={isOpen}>
                  <div className="socialBox">
                    <div className="kakao">
                      <Dummy></Dummy>
                    </div>
                  </div>
                  <div className="loginEnd">
                    {/* <div className="loginLine">
                      회원이 아니신가요? <Link to="/signup">회원가입</Link>
                    </div> */}
                    <div className="noUser">비회원으로 계속하기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
}

export default LoginPage;

