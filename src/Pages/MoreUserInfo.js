import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { setToken, modifyUser, checkFirst} from "../Components/redux/new/action";
import "../css/signup.css";

function MoreInfo () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  
  const modifyUserInfo = (value, variety) => {
    dispatch(modifyUser(value, variety));
  }

  const requestModifyUser = async () => {
    await axios.post(process.env.REACT_APP_DB_HOST + '/userinfo', {
      authorization: state.user.token
    }, {
      mobile: state.modifyUser.mobile,
      username: state.modifyUser.username,
      usertype: state.modifyUser.usertype,
    })
     .then(res => {
       const token = res.data.data.accessToken;
       dispatch(setToken(token));
       dispatch(checkFirst());
     })
  }
  

  return (
    <div className="signup">
      <div className="signup-body">
        <div className="signup-titlebox">
          <div className="signup-titlebox-title">추가 정보 입력</div>
          <div className="signup-titlebox-subtitle">재즈바바 서비스 이용을 위해서는 추가 정보 입력이 필요합니다</div>
        </div>
        <div className="signup-formwrapper">
          <div className="signup-form">
            <div className="signup-form-label">닉네임</div>
            <input className="signup-form-input-text" type="text" placeholder="닉네임을 입력하세요" onChange={(e) => modifyUserInfo(e.target.value, 'username')} required/>
          </div>
          <div className="signup-form">
            <div className="signup-form-label">연락처</div>
            <input className="signup-form-input-phone" type="tel" maxlength="11" placeholder="전화번호를 숫자만 입력하세요 (01012345678)" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" onChange={(e) => modifyUserInfo(e.target.value, 'mobile')} required/>                 
          </div>
          <div className="signup-form">
            <div className="signup-form-label">회원유형</div>
            <select className='signup-form-usertype' onChange={(e) => modifyUserInfo(e.target.value, 'usertype')}>
              <option value='customer'>일반회원</option>
              <option value='boss'>사업자</option>
            </select>
          </div>
          <Link to="/" onClick={() => requestModifyUser()}>
            <button className="signup-btn" >입력완료</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo;