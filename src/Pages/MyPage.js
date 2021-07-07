import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { setList, typeText, modifySwitch, saveMyId, setShow, setToken, setUser } from "../Components/redux/new/action";
import Modal from "react-modal";
import "../css/mypage.css"

function MyPage () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  axios.get(process.env.REACT_APP_DB_HOST + '/userinfo', {authorization: state.user.token})
   .then(res => {
     const token1 = res.data.data.token;
     const info = res.data.data.userinfo;
     dispatch(setUser(info));
     dispatch(setToken(token1));
    })
    
  axios.get(process.env.REACT_APP_DB_HOST + 'reservationRead', {authorization: state.user.token}, {user_id: state.user.id})
    .then(res => {
      const token2 = res.data.data.token;
      const reservation = res.data.data.list;
      dispatch(setList(reservation, 'reservation'));
      dispatch(setToken(token2));
   })
  
  axios.get(process.env.REACT_APP_DB_HOST + 'reviewRead', {authorization: state.user.token}, {userId: state.user.id})
   .then(res => {
     const token3 = res.data.data.token;
     const review = res.data.data.list;
     dispatch(setList(review, 'reviewList'));
     dispatch(setToken(token3));
   })
  
  const modifyUser = (variety) => {
    dispatch(modifySwitch(variety));
  }

  const withdrawUser = () => {
    // axios.
  }

  return (
    <div class="mypage">

      <div class="mypage-body">

        <div class="mypage-body-header">
          <div class="mypage-body-header-accinfo">
            <div class="mypage-body-header-accinfo-name">{state.user.username}</div>
            <div class="mypage-body-header-accinfo-tail">님의 마이페이지</div>
          </div>

          <div class="mypage-body-header-btnarea">
            <button class="mypage-body-header-btn" onClick={() => modifyUser('username')}>닉네임 수정</button>
            <button class="mypage-body-header-btn" onClick={() => modifyUser('mobile')}>연락처 수정</button>
            <button class="mypage-body-header-btn" onClick={() => withdrawUser()}>회원탈퇴</button>
          </div>
        </div>

        <div class="mypage-body-info">
          <div class="mypage-body-info-title">
            <div class="mypage-body-info-title-label">카카오계정</div>
            <div class="mypage-body-info-title-label">닉네임</div>
            <div class="mypage-body-info-title-label">연락처</div>
          </div>

          <div class="mypage-body-info-data">
            <div class="mypage-body-info-data-result">{state.user.userId}</div>
            <div class="mypage-body-info-data-result">{state.user.username}</div>
            <div class="mypage-body-info-data-result">{state.user.mobile}</div>
          </div>
        </div>


        <div class="mypage-body-recent">


          <div class="mypage-body-recent-reservation">
            <div class="mypage-body-recent-reservation-title">최근 예약</div>

            <div class="mypage-body-recent-reservation-labelarea">
              <div class="recentreservation-label-date">날짜</div>
              <div class="recentreservation-label-name">점포명</div>
              <div class="recentreservation-label-time">시간</div>
              <div class="recentreservation-label-person">인원</div>
              <div class="recentreservation-label-status">상태</div>
            </div>
                        

            <div class="mypage-body-recent-reservation-container">
              {state.reservation.map(el => {
                return(
                <div class="recentreservation-body">
                  <div class="recentreservation-body-date">{el.show.date.replace(/-/,'.') + '.'}</div>
                  <div class="recentreservation-body-name">{el.show.jazzbar.barName}</div>
                  <div class="recentreservation-body-time">{el.show.time}</div>
                  <div class="recentreservation-body-person">{el.people}</div>
                  <div class="recentreservation-body-status-ok">{el.confirm == 'pending' ? '대기' : el.confirm == 'denied' ? '거절' : '승인'}</div>
                </div>
                )
              })}
            </div>
          </div>


          <div class="mypage-body-recent-review">
            <div class="mypage-body-recent-review-title">최근 리뷰</div>

            <div class="mypage-body-recent-review-labelarea">
              <div class="recentreview-label-date">날짜</div>
              <div class="recentreview-label-name">점포명</div>
              <div class="recentreview-label-text">내용</div>
            </div>

            <div class="mypage-body-recent-review-container">
              {state.reviewList.map(el => {
                return (
                <div class="recentreview-body">
                  <div class="recentreview-body-info-date">⭐ {el.point}</div>
                  <div class="recentreview-body-info-name">{el.jazzbar.barName ? el.jazzbar.barName : el.board.title}</div>
                  <div class="recentreview-body-info-text">{el.content}</div>
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