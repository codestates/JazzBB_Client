import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { setList, typeText, modifySwitch, saveMyId, setShow, setToken} from "../Components/redux/new/action";
import Modal from "react-modal";
import "../css/shopinfo.css"

function MyPage () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  axios.get(process.env.REACT_APP_DB_HOST + '/userinfo', {authorization: state.user.token})
   .then(res => {
     const token = res.data.data.token;
     const info = res.data.data.userinfo;
   })


  return (
    <div class="mypage">

      <div class="mypage-body">

        <div class="mypage-body-header">
          <div class="mypage-body-header-accinfo">
            <div class="mypage-body-header-accinfo-name">김코딩</div>
            <div class="mypage-body-header-accinfo-tail">님의 마이페이지</div>
          </div>

          <div class="mypage-body-header-btnarea">
            <button class="mypage-body-header-btn">닉네임 수정</button>
            <button class="mypage-body-header-btn">연락처 수정</button>
            <button class="mypage-body-header-btn">회원탈퇴</button>
          </div>
        </div>

        <div class="mypage-body-info">
          <div class="mypage-body-info-title">
            <div class="mypage-body-info-title-label">카카오계정</div>
            <div class="mypage-body-info-title-label">닉네임</div>
            <div class="mypage-body-info-title-label">연락처</div>
          </div>

          <div class="mypage-body-info-data">
            <div class="mypage-body-info-data-result">example@kakao.com</div>
            <div class="mypage-body-info-data-result">김코딩</div>
            <div class="mypage-body-info-data-result">010-0000-0000</div>
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
              <div class="recentreservation-body">
                <div class="recentreservation-body-date">2021.07.95</div>
                <div class="recentreservation-body-name">위코드 스테이츠 클래스 101</div>
                <div class="recentreservation-body-time">19:30</div>
                <div class="recentreservation-body-person">8</div>
                <div class="recentreservation-body-status-ok">예약됨</div>
              </div>


              <div class="recentreservation-body">
                <div class="recentreservation-body-date">2021.06.95</div>
                <div class="recentreservation-body-name">그것은 재즈였다</div>
                <div class="recentreservation-body-time">19:30</div>
                <div class="recentreservation-body-person">85</div>
                <div class="recentreservation-body-status-no">거절됨</div>
              </div>

                            
              <div class="recentreservation-body">
                <div class="recentreservation-body-date">2021.05.40</div>
                <div class="recentreservation-body-name">개발자 쉼터</div>
                <div class="recentreservation-body-time">19:30</div>
                <div class="recentreservation-body-person">4</div>
                <div class="recentreservation-body-status-stby">승인대기</div>
              </div>
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
              <div class="recentreview-body">
                <div class="recentreview-body-info-date">2021.05.40</div>
                <div class="recentreview-body-info-name">개발자 쉼터</div>
                <div class="recentreview-body-info-text">졸라 힘드네 정말</div>
              </div>

              <div class="recentreview-body">
                <div class="recentreview-body-info-date">2021.05.40</div>
                <div class="recentreview-body-info-name">개발자 쉼터</div>
                <div class="recentreview-body-info-text">졸라 힘드네 정말</div>
              </div>
            </div>

          </div>





        </div>
      </div>
    </div>


  )
}

export default MyPage;