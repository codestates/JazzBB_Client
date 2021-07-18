import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { setPeople, setToken, setCurrentPage, saveThisHistory} from "../Components/redux/new/action";
import "../css/reservation.css";


function Reservation(){
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const [openTime, closeTime] = state.jazzbar.openTime.split('-');

  useEffect(()=>{
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
  }, [])

  const changePeople = (e) => {
    dispatch(setPeople(e.target.value));
  }

  const requestReservation = async() => {
    await axios.get(process.env.REACT_APP_DB_HOST + '/reservationCreate', { headers: { authorization: state.user.token }, withCredentials: true }, {
      showId: state.show.id,
      userId: state.user.dbUserId,
      people: state.people,
    })
    .then(res => {
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
    })
  }

  return (
    <div className="reservation">
      <div className="reservation-body">
        <div className="reservation-header">
          <div className="reservation-header-name">{state.jazzbar.barName}</div>
          <div className="reservation-header-locale">
            <div className="reservation-header-locale-location">{state.jazzbar.area}</div>
          </div>
          <div className="reservation-header-phone">{state.jazzbar.mobile}</div>
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
            <img className="reservation-photobox-img" src={state.show.thumbnail ? state.show.thumbnail : state.jazzbar.thumbnail} />
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
              <input className="reservation-details-person" type="number" name="reservation-persons" min="1" max={state.jazzbar.defaultSeat} onChange={(number) => changePeople(number)} value="1" />
            </div>
  
            <Link to="/jazzbar">
              <button className="reservation-details-submit" onClick={()=> requestReservation()}>예약신청</button>
            </Link>                  
  
          </div>
  
        </div>
  
  
      </div>
    </div>
  )
}

export default Reservation;
