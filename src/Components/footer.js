import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { modifySwitch } from "./redux/new/action"
import Modal from "react-modal";
import './footer.css'


function Footer() {
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

  const goHome = () => {
    return <Redirect to='/service' />
  }

  return(
        <div className="footer">
                    <div className="footer-logoarea">
                        <img id="footer-logo" src="/img/resource/footer.png" alt="footerlogo" />
                    </div>
    
                    <div className="footer-infoarea">
                        <div className="footer-infoarea-infolabel">
                            Copyright © Team DDH. All rights reserved.
                        </div>
    
    
                        <div className="footer-infoarea-buttonsarea">
                            <a className="footer-infoarea-buttonsarea-buttons" href="/footer/weareddh">회사소개</a>
                            <a class="footer-infoarea-buttonsarea-buttons" href="mailto:help@teamddh.com">제휴문의</a>
                            <a className="footer-infoarea-buttonsarea-buttons" href="/footer/terms">이용약관</a>
                            <a className="footer-infoarea-buttonsarea-buttons" href="/footer/termspi">개인정보처리방침</a>
                            <a class="footer-infoarea-buttonsarea-buttons" href="mailto:help@teamddh.com">고객센터</a>
                        </div>
    
                        <div className="footer-infoarea-infobody">
                            <div className="footer-infoarea-infobody-line1">
                                <div className="line1-items">(주) 디디에이치 |</div>
                                <div className="line1-items">13487 경기도 성남시 분당구 대왕판교로 645번길 16 플레이뮤지엄 | </div>
                                <div className="line1-items">고객센터 : help@teamddh.com / </div>
                                <div className="line1-items"> 1566-4882 (유료)</div>
                            </div>
                            <div className="footer-infoarea-infobody-line1">
                                <div className="line1-items">사업자등록번호 : 211-87-15555 | </div>
                                <div className="line1-items">통신판매업 신고번호 : 제 2021-경기성남-9999호 | </div>
                                <div className="line1-items">대표이사 : 서지민</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
    
  )
}

export default Footer;
