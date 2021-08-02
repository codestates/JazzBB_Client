import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { setList, modifySwitch, setToken, setUser, modifyUser, modifyFinish, deleteState, setCurrentPage, saveThisHistory } from "../Components/redux/new/action";
import Modal from "react-modal";
import "../css/mypage.css"

 function MyPage() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
    axiosRequest();
  }, [])

  const axiosRequest = async() => {
    await axios.get(process.env.REACT_APP_DB_HOST + '/userinfo', 
    { headers: { authorization: state.token }, withCredentials: true })
     .then(res => {
      console.log(res.data,'1data')
       const token1 = res.data.data.accessToken;
       const info = res.data.data.userinfo;
       dispatch(setUser(info));
       console.log(token1,'1')
       dispatch(setToken(token1));
     })
      await axios.post(process.env.REACT_APP_DB_HOST + '/reservationRead', 
      { userId: state.user.id }, 
      { headers: { authorization: state.token }, withCredentials: true })
      .then(res => {
       console.log(res.data,'res.data') //비어있음
        const token2 = res.data.data.accessToken;
        const reservation = res.data.data.list;
        console.log(token2,'2')
        dispatch(setList(reservation, 'reservation'));
        // dispatch(setToken(token2))
      })
    
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewRead', {userId : state.user.id} ,{ headers: { authorization: state.token }, withCredentials: true })
     .then(res => {
      console.log(res.data.data,'3')
       const review = res.data.data.list;
       dispatch(setList(review, 'reviewList'));
     })
  }

  const modifyUserTogle = (variety) => {
    dispatch(modifySwitch(variety));
  }

  const changeState = (event, variety) => {
    console.log(event.target.value)
    dispatch(modifyUser(event.target.value, variety));
  }

  const handleModifyUser = (variety) => {
    dispatch(modifyFinish());
    axios.post(process.env.REACT_APP_DB_HOST + '/userinfo', { ...state.user }, { headers: { authorization: state.token }, withCredentials: true })
      .then(res => {

        const token4 = res.data.data.accessToken;
        dispatch(setToken(token4));
        dispatch(modifySwitch(variety));
      })
  }

  const withdrawUser = () => {
    axios.post(process.env.REACT_APP_DB_HOST + "/withdraw", { headers: { authorization: state.token }, withCredentials: true })
      .then(() => {
        dispatch(modifySwitch('withdrawModal'));
        dispatch(modifySwitch('withdrawConfirm'));
        dispatch(deleteState('user'));
      })
  }

  const redirectHome = () => {
    dispatch(modifySwitch('withdrawConfirm'));
  }


  return  (
    <div className="mypage">

      <div className="mypage-body">
        <Modal className="mypage-modal" isOpen={state.togle.withdrawModal} onRequestClose={() => modifyUserTogle('withdrawModal')}>
          {state.togle.withdrawConfirm ?
            <div className="mypage-withdraw-modal-body">
              <div className="mypage-withdraw-modal-text">탈퇴가 완료되었습니다</div>
              <div className="mypage-withdraw-modal-text">지금까지 이용해주셔서 감사합니다</div>
              <Link to="/service" onClick={() => redirectHome()}>
                <button className="mypage-withdraw-modal-button-confirm" >홈으로 돌아가기</button>
              </Link>
            </div>
            :
            <div className="mypage-withdraw-modal-body">
              <div className="mypage-withdraw-modal-text">정말 회원을 탈퇴하시겠습니까?</div>
              <button className="mypage-withdraw-modal-button-no" onClick={() => modifyUserTogle('withdrawModal')}>가입을 유지하겠습니다</button>
              <button className="mypage-withdraw-modal-button-yes" onClick={() => withdrawUser()}>회원을 탈퇴하겠습니다</button>
            </div>
          }

        </Modal>
        <div className="mypage-body-header">
          <div className="mypage-body-header-accinfo">
            <div className="mypage-body-header-accinfo-name">{state.user.username}</div>
            <div className="mypage-body-header-accinfo-tail">님의 마이페이지</div>
          </div>

          <div className="mypage-body-header-btnarea">
            {!state.togle.user ? <button className="mypage-body-header-btn" onClick={() => modifyUserTogle('user')}>회원정보 수정</button> : <button className="mypage-body-header-btn-a" onClick={() => handleModifyUser('user')}>수정 완료</button>}
            <button className="mypage-body-header-btn" onClick={() => modifyUserTogle('withdrawModal')}>회원탈퇴</button>
          </div>
        </div>

        <div className="mypage-body-info">
          <div className="mypage-body-info-title">
            <div className="mypage-body-info-title-label">카카오계정</div>
            <div className="mypage-body-info-title-label">닉네임</div>
            <div className="mypage-body-info-title-label">연락처</div>
          </div>

          {!state.togle.user ?
            <div className="mypage-body-info-data">
              <div className="mypage-body-info-data-result">{state.user.userId}</div>
              <div className="mypage-body-info-data-result">{state.user.username}</div>
              <div className="mypage-body-info-data-result">{state.user.mobile}</div>
            </div>
            :
            <div className="mypage-body-info-data">
              <div className="mypage-body-info-data-result">{state.user.userId}</div>
              <input className="mypage-body-info-data-result" defaultValue={state.user.username} onChange={(e) => changeState(e, 'username')} />
              <input className="mypage-body-info-data-result" defaultValue={state.user.mobile} onChange={(e) => changeState(e, 'mobile')} />
            </div>
          }
        </div>


        <div className="mypage-body-recent">


          <div className="mypage-body-recent-reservation">
            <div className="mypage-body-recent-reservation-title">나의 예약</div>

            <div className="mypage-body-recent-reservation-labelarea">
              <div className="recentreservation-label-date">날짜</div>
              <div className="recentreservation-label-name">점포명</div>
              <div className="recentreservation-label-time">시간</div>
              <div className="recentreservation-label-person">인원</div>
              <div className="recentreservation-label-status">상태</div>
            </div>


            <div className="mypage-body-recent-reservation-container">
              {state.reservation.map(el => {
                return (
                  <div className="recentreservation-body">
                    <div className="recentreservation-body-date">{el.show.date.replace(/-/g, '.') + '.'}</div>
                    <div className="recentreservation-body-name">{el.show.jazzbar.barName}</div>
                    <div className="recentreservation-body-time">{el.show.time}</div>
                    <div className="recentreservation-body-person">{el.people}</div>
                    {el.confirm == 'pending' ?
                      <div className="recentreservation-body-status-stby">
                        '대기'
                      </div>
                      : el.confirm == 'denied' ?
                        <div className="recentreservation-body-status-no">
                          '거절'
                        </div>
                        :
                        <div className="recentreservation-body-status-ok">
                          '승인'
                        </div>
                    }
                  </div>
                )
              })}
            </div>
          </div>


          <div className="mypage-body-recent-review">
            <div className="mypage-body-recent-review-title">내 재즈바 리뷰</div>

            <div className="mypage-body-recent-review-labelarea">
              <div className="recentreview-label-date">날짜</div>
              <div className="recentreview-label-name">점포명</div>
              <div className="recentreview-label-text">내용</div>
            </div>

            <div className="mypage-body-recent-review-container">
              {state.reviewList.map(el => {
                return (
                !el ? null : 
                  <div className="recentreview-body">
                    <div className="recentreview-body-info-date">{el.createdAt}</div>
                    <div className="recentreview-body-info-name">{el.jazzbar.barName}</div>
                    <div className="recentreview-body-info-text">{el.content}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default MyPage;