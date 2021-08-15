import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setPeople, setToken, setCurrentPage, saveThisHistory, modifySwitch } from "../Components/redux/new/action";
import "../css/reservation.css";


function Reservation(){
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const [openTime, closeTime] = state.barList.find(el => el.id === state.currentJazzbar).openTime.split('-');
  let history = useHistory();

  useEffect(()=>{
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
  }, [])

  const changePeople = (e) => {
    dispatch(setPeople(e.target.value));
  }

  const requestReservation = () => {
    if(!state.isLogin) {
      alert('로그인 후 예약이 가능합니다.');
      dispatch(modifySwitch('loginModal'));
    } else {
      axios.post(process.env.REACT_APP_DB_HOST + '/reservationCreate', {
        showId: state.show.id,
        userId: state.user.id,
        people: state.people,
      }, { headers: { authorization: state.token }, withCredentials: true })
      .then(res => {
        const token = res.data.data.accessToken;
        dispatch(setToken(token));
        history.push('/jazzbar')
      })
    }
  }

  return (
    <div className="reservation">
      <div className="reservation-body">
        <div className="reservation-header">
          <div className="reservation-header-name">{state.barList.find(el => el.id === state.currentJazzbar).barName}</div>
          <div className="reservation-header-locale">
            <div className="reservation-header-locale-location">{state.barList.find(el => el.id === state.currentJazzbar).area}</div>
          </div>
          <div className="reservation-header-phone">{state.barList.find(el => el.id === state.currentJazzbar).mobile}</div>
          <div className="reservation-header-openhour">{`${openTime}~${closeTime}`}</div>
        </div>
        <div className="reservation-shopnotice">
          <div className="reservation-shopnotice-label">주의사항</div>
          <div className="reservation-shopnotice-text">
            <ul>
              {
                state.notice.map(el => <li>{el}</li>)
              }
            </ul>
          </div>
        </div>
  
        <div className="reservation-container">
  
          <div className="reservation-photobox">
            <img className="reservation-photobox-img" src={state.show.thumbnail ? state.show.thumbnail : state.barList.find(el => el.id === state.currentJazzbar).thumbnail} />
          </div>
  
          <div className="reservation-details">
  
            <div className="reservation-details-lineup">
              <div className="reservation-details-lineup-label">공연 안내</div>
              <div className="reservation-details-lineup-text">
                {state.show.content}
              </div>
            </div>
  
            <div className="reservation-details-personWrapper">
              <div className="reservation-details-label">방문인원</div>
              <input className="reservation-details-person" type="number" name="reservation-persons" min="1" max={state.barList.find(el => el.id === state.currentJazzbar).defaultSeat} onChange={(number) => changePeople(number)} defaultValue="1" />
            </div>
  
              <button className="reservation-details-submit" onClick={()=> requestReservation()}>예약신청</button>               
  
          </div>
  
        </div>
  
  
      </div>
    </div>
  )
}

export default Reservation;
