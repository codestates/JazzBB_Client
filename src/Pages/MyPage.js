import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import { setList, modifySwitch, setToken, setUser, modifyUser, modifyFinish, setCurrentPage, saveThisHistory, Reset } from "../Components/redux/new/action";
import Modal from "react-modal";
import "../css/mypage.css"

 function MyPage() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  let history = useHistory();

  useEffect(async () => {
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
    await axios.get(process.env.REACT_APP_DB_HOST + '/userinfo', 
    { headers: { authorization: state.token }, withCredentials: true })
     .then(res => {
      console.log(res.data,'1data')
       const token1 = res.data.data.accessToken;
       const info = res.data.data.userinfo;
       dispatch(setUser(info));
       dispatch(setToken(token1));
     })
      await axios.post(process.env.REACT_APP_DB_HOST + '/reservationRead', 
      { userId: state.user.id }, 
      { headers: { authorization: state.token }, withCredentials: true })
      .then(res => {
        const token2 = res.data.data.accessToken;
        const reservation = res.data.data.list;
        dispatch(setList(reservation, 'reservation'));
        // dispatch(setToken(token2))
      })
    
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewRead', {userId : state.user.id} ,{ headers: { authorization: state.token }, withCredentials: true })
     .then(res => {
       const review = res.data.data.list;
       dispatch(setList(review, 'reviewList'));
     })
  }, [])

  const modifyUserTogle = (variety) => {
    dispatch(modifySwitch(variety));
  }

  const changeState = (event, variety) => {
    dispatch(modifyUser(event.target.value, variety));
  }

  const handleModifyUser = (variety) => {
    dispatch(modifyFinish());
    axios.post(process.env.REACT_APP_DB_HOST + '/userinfo', { ...state.user, ...state.modifyUser }, { headers: { authorization: state.token }, withCredentials: true })
      .then(res => {
        console.log(res.data.data)
        const token4 = res.data.data.accessToken;
        dispatch(setToken(token4));
        dispatch(modifySwitch(variety));
      })
  }

  const withdrawUser = () => {
    axios.post(process.env.REACT_APP_DB_HOST + "/withdraw", '',{ headers: { authorization: state.token }, withCredentials: true })
      .then(() => {
        dispatch(Reset())
        history.push('/')
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
              <div className="mypage-withdraw-modal-text">????????? ?????????????????????</div>
              <div className="mypage-withdraw-modal-text">???????????? ?????????????????? ???????????????</div>
              <Link to="/service" onClick={() => redirectHome()}>
                <button className="mypage-withdraw-modal-button-confirm" >????????? ????????????</button>
              </Link>
            </div>
            :
            <div className="mypage-withdraw-modal-body">
              <div className="mypage-withdraw-modal-text">?????? ????????? ?????????????????????????</div>
              <button className="mypage-withdraw-modal-button-no" onClick={() => modifyUserTogle('withdrawModal')}>????????? ?????????????????????</button>
              <button className="mypage-withdraw-modal-button-yes" onClick={() => withdrawUser()}>????????? ?????????????????????</button>
            </div>
          }

        </Modal>
        <div className="mypage-body-header">
          <div className="mypage-body-header-accinfo">
            <div className="mypage-body-header-accinfo-name">{state.user.username}</div>
            <div className="mypage-body-header-accinfo-tail">?????? ???????????????</div>
          </div>

          <div className="mypage-body-header-btnarea">
            {!state.togle.user ? <button className="mypage-body-header-btn" onClick={() => modifyUserTogle('user')}>???????????? ??????</button> : <button className="mypage-body-header-btn-a" onClick={() => handleModifyUser('user')}>?????? ??????</button>}
            <button className="mypage-body-header-btn" onClick={() => modifyUserTogle('withdrawModal')}>????????????</button>
          </div>
        </div>

        <div className="mypage-body-info">
          <div className="mypage-body-info-title">
            <div className="mypage-body-info-title-label">???????????????</div>
            <div className="mypage-body-info-title-label">?????????</div>
            <div className="mypage-body-info-title-label">?????????</div>
          </div>

          {!state.togle.user ?
            <div className="mypage-body-info-data">
              <div className="mypage-body-info-data-result">{state.user.userEmail}</div>
              <div className="mypage-body-info-data-result">{state.user.username}</div>
              <div className="mypage-body-info-data-result">{state.user.mobile}</div>
            </div>
            :
            <div className="mypage-body-info-data">
              <div className="mypage-body-info-data-result">{state.user.userEmail}</div>
              <input className="mypage-body-info-data-result" defaultValue={state.user.username} onChange={(e) => changeState(e, 'username')} />
              <input className="mypage-body-info-data-result" defaultValue={state.user.mobile} onChange={(e) => changeState(e, 'mobile')} />
            </div>
          }
        </div>


        <div className="mypage-body-recent">


          <div className="mypage-body-recent-reservation">
            <div className="mypage-body-recent-reservation-title">?????? ??????</div>

            <div className="mypage-body-recent-reservation-labelarea">
              <div className="recentreservation-label-date">??????</div>
              <div className="recentreservation-label-name">?????????</div>
              <div className="recentreservation-label-time">??????</div>
              <div className="recentreservation-label-person">??????</div>
              <div className="recentreservation-label-status">??????</div>
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
                        '??????'
                      </div>
                      : el.confirm == 'denied' ?
                        <div className="recentreservation-body-status-no">
                          '??????'
                        </div>
                        :
                        <div className="recentreservation-body-status-ok">
                          '??????'
                        </div>
                    }
                  </div>
                )
              })}
            </div>
          </div>


          <div className="mypage-body-recent-review">
            <div className="mypage-body-recent-review-title">??? ????????? ??????</div>

            <div className="mypage-body-recent-review-labelarea">
              <div className="recentreview-label-date">??????</div>
              <div className="recentreview-label-name">?????????</div>
              <div className="recentreview-label-text">??????</div>
            </div>

            <div className="mypage-body-recent-review-container">
              {
                state.reviewList.length === 0 ? null :
              state.reviewList.map(el => {
                if(el && el.jazzbar){
                  return (
                    <div className="recentreview-body">
                      <div className="recentreview-body-info-date">{el.createdAt.replace(/-/g, '.').slice(0,10) + '.'}</div>
                      <div className="recentreview-body-info-name">{el.jazzbar.barName}</div>
                      <div className="recentreview-body-info-text">{el.content}</div>
                    </div>
                  )
                }
              })
              }
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default MyPage;