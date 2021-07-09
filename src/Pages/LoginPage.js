import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { modifySwitch, modifyUser } from "../Components/redux/new/action";
import "../css/LoginPage.css";


function LoginPage () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);  
     
  return (
    <div>
      {/* {isOpen ? ( */}
        <div className="modal">
          <div onClick={'fill me in'}>
            <div className="loginModal">
              <span className="close" onClick={'fill me in'}>
                &times;
              </span>
              <div className="modalContents" onClick={'fill me in'}>
                <div className="socialBox">
                  <div className="kakao">
                    {'fill me in 버튼 만들기'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* ) : null} */}
    </div>
  )
}

export default LoginPage;

