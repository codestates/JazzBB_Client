import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setMenuList, setPhotoList, setShowList, setReviewList } from "../Components/redux/new/action";

function Reservation(){
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const [openTime, closeTime] = state.jazzbar.openTime.split('-');

  const 

  return (
  <div class="reservation">
                  <div class="reservation-body">
  
                      <div class="reservation-header">
                          <div class="reservation-header-name">{state.jazzbar.barName}</div>
                          <div class="reservation-header-locale">
                              <div class="reservation-header-locale-location">{state.jazzbar.area}</div>
                          </div>
                          <div class="reservation-header-phone">{state.jazzbar.mobile}</div>
                          <div class="reservation-header-openhour">{`${openTime}~${closeTime}`}</div>
                      </div>
  
                      <div class="reservation-shopnotice">
                          <div class="reservation-shopnotice-label">주의사항</div>
                          <div class="reservation-shopnotice-text">
                              <ul>
                                {
                                  state.notice.map(el => <li>{el}</li>)
                                }
                              </ul>
                          </div>
                      </div>
  
                      <div class="reservation-container">
  
                          <div class="reservation-photobox">
                              <img class="reservation-photobox-img" src={state.show.thumbnail ? state.show.thumbnail : state.jazzbar.thumbnail} />
                          </div>
  
                          <div class="reservation-details">
  
                              <div class="reservation-details-lineup">
                                  <div class="reservation-details-lineup-label">공연 안내</div>
                                  <div class="reservation-details-lineup-text">
                                      {state.show.content}
                                  </div>
                              </div>
  
                              <div class="reservation-details-personWrapper">
                                  <div class="reservation-details-label">방문인원</div>
                                  <input class="reservation-details-person" type="number" name="reservation-persons" min="1" max={state.jazzbar.defaultSeat} onChange={} value="1" />
                              </div>
                              {/* <div class="reservation-details-timeWrapper">
                                  <div class="reservation-details-label">방문일시</div>
                                  <input class="reservation-details-date" type="datetime-local" name="reservation-date" />
                              </div> */}
  
  
                              <button class="reservation-details-submit" onClick={}>예약신청</button>
  
                          </div>
  
                      </div>
  
  
                  </div>
              </div>
  )
}

export default Reservation;
