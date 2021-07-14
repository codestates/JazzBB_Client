import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { modifySwitch, deleteState, isLogin } from "./redux/new/action"
import Modal from "react-modal";
import './Nav.css'


function Nav() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  const loginModalSwitch = (login) => {
    dispatch(modifySwitch(login))
  }

  const logout = () => {
    dispatch(deleteState('user'));
    dispatch(isLogin());
    window.location.pathname = "/service";
    axios.post(process.env.REACT_APP_DB_HOST + "/logout", {authorization: state.user.token})
    .then(() => {
     })
  }

  const kakaoLogin = () => {
    window.location.assign(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_OAUTH}&redirect_uri=https://localhost:3000&response_type=code`);
  }

  return(
    <div className="navi">
      <Link to="service">
        <img id="navi-logo" src="./resource/jazzbb_logo_black.png" alt="jazzbarbar" />
      </Link>
      <div className="navi-btnWrapper">
        <Link to="/search">
          <button className="navi-btn">Search</button>
        </Link>
        <Link to="/mypage">
          <button className="navi-btn">Mypage</button>
        </Link>
        {
          !state.isLogin ? 
          <button className="navi-btn" onClick={()=> loginModalSwitch('loginModal')}>Login</button>
          :
          <button className="navi-btn" onClick={()=> logout()}>Logout</button>
        }
        <Modal className="navi-login-modal" isOpen={state.togle.loginModal} onRequestClose={() => loginModalSwitch('loginModal')} closeTimeoutMS={200}>
          <div className="login-modal-box">
                <div className="clsbtnwrapper">
                    <button className="close" onClick={() => loginModalSwitch('loginModal')}>X</button>
                </div>
                <div className="login-modal-body">
                  <img class="login-modal-logo" src='/img/resource/jazzbb_logo_black.png' />
                  <div class="login-modal-label">간편하게 로그인하고</div>
                  <div class="login-modal-label">다양한 서비스를 이용해보세요</div>
            
                  <img class="login-modal-btn-kakao-login" src="/img/resource/kakao_login.png" onClick={()=> kakaoLogin()}/>
                  <img class="login-modal-btn-kakao-signup" src="/img/resource/kakao_start.png" onClick={()=> kakaoLogin()} />
                </div>
                
          </div>
        </Modal>
      </div>
    </div>     
  )
}

export default Nav;
