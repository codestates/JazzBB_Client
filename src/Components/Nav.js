import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { modifySwitch } from "./redux/new/action"
import LoginPage from '../Pages/LoginPage'
import Modal from "react-modal";
import './Nav.css'
import ModalEdit from "./Boss/ShowManage/ModalEdit";

// function Nav (){
//     const [isOpen, setOpenClose] =useState(false);
//     const setOpen = setOpenClose(true);
//     const setClose = setOpenClose(false);

function Nav() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  const redirectSearch = () => {
    return <Redirect to="/search" />;
  };

  const loginModalSwitch = (login) => {
    dispatch(modifySwitch(login))
  }

  const kakaoLogin = () => {
    window.location.assign(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_OAUTH}&redirect_uri=https://localhost:3000&response_type=code`);
  }

  return(
    <div className="navi">
      <img id="navi-logo" src="./resource/jazzbb_logo_black.png" alt="jazzbarbar" />
      <div className="navi-btnWrapper">
        <button className="navi-btn" onClick={()=> redirectSearch()}>Search</button>
        <button className="navi-btn" onClick={()=> loginModalSwitch('loginModal')}>Login</button>
        <Modal className="navi-login-modal" isOpen={state.togle.loginModal} onRequestClose={() => loginModalSwitch('loginModal')} closeTimeoutMS={200}>
          <div className="login-modal-box">
            <span className="close" onClick={() => loginModalSwitch('loginModal')}>&times;</span>
            <button className="kakao-login-button" onClick={()=> kakaoLogin()}>카카오 계정으로 로그인</button>
          </div>
        </Modal>
      </div>
    </div>     
  )
}

export default Nav;
