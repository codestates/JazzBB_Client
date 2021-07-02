import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { setList, typeText, modifySwitch, saveMyId, setShow } from "../Components/redux/new/action";
import Reservation from "./ReservationPage";


function JazzBar(){ // { barName, mobile, area, thumbnail, address, serviceOption, rating, openTime, gpsX, gpsY }
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const [openTime, closeTime] = state.jazzbar.openTime.split('-');//'17:00-20:00'

  axios.get(process.env.REACT_APP_DB_HOST + '/showRead', {id: state.jazzbar.id})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setList(list, 'showList'));
   })

  axios.get(process.env.REACT_APP_DB_HOST + '/menuRead', {jazzbar_id: state.jazzbar.id})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setList(list, 'menu'));
   })
   
  axios.get(process.env.REACT_APP_DB_HOST + '/menuRead', {jazzbar_id: state.jazzbar.id, type: 'photo'})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setList(list, 'barPhoto'));
   })

  axios.get(process.env.REACT_APP_DB_HOST + '/reviewRead', {jazzbarId: state.jazzbar.id})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setList(list, 'reviewList'));
   })

  const optionArr = state.jazzbar.serviceOption.split('').map(el => {
    state.serviceOption.forEach(ele => {
      if(el === ele.id){
        return ele;
      };
    });
  })
  const typingReview = (e, veriety) => {
    dispatch(typeText(e.target.value, veriety));
  }

  const reviewPost = async () => {
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewCreate', {
      authorization: state.user.token
    },{
      jazzbarId: state.jazzbar.id, 
      point: state.review.point, 
      content: state.review.content
    })
     .then(res => {
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
     })
  }
    
  const goReservation = (show) => {
    dispatch(setShow(show));
    return <Redirect to="/reservation" />; //여기 물어보기
  }
    
  const modifyReview = () => {
    dispatch(modifySwitch('reviewModify'));
  }
    
  const deleteReview = () => {
    dispatch(modifySwitch('reviewDelete'));
  }
    
  const reviewUpdate = async () => {
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewUpdate', {
      authorization: state.user.token
    },{
      jazzbarId: state.jazzbar.id, 
      point: state.review.point, 
      content: state.review.content
    })
     .then(res => {
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
      dispatch(modifySwitch('reviewModify'));
     });
  }

  const reviewDeleteRequest = async () => {
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewDelete', {
      authorization: state.user.token
    },{
      id: state.myReviewId
    })
     .then(res => {
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
      dispatch(modifySwitch('reviewDelete'));
     });
  }

 

  return (
    <div className="shopinfo">

      <div className="shopinfo-body">
        <div className="shopinfo-header">

          <div className="shopinfo-header-imgarea">
            <img className="shopinfo-header-img" src={state.jazzbar.thumbnail} alt="headerimg" />
          </div>

          <div className="shopinfo-header-infoarea">
            <div className="shopinfo-header-infoarea-shopname">{state.jazzbar.barName}</div>
            <div className="shopinfo-header-infoarea-geo">
              <div className="shopinfo-header-infoarea-location">{state.jazzbar.area}</div>
              <button className="shopinfo-header-infoarea-tmapbtn">Tmap 길안내</button>{/* 티맵 구현 필요 */}
            </div>

            <div className="shopinfo-header-infoarea-phone">{state.jazzbar.mobile}</div>
            <div className="shopinfo-header-infoarea-time">{`${openTime} ~ ${closeTime}`}</div>

            <div className="shopinfo-header-infoarea-ratingarea">
              <div className="shopinfo-header-infoarea-ratingarea-star">⭐</div>
              <div className="shopinfo-header-infoarea-ratingarea-rate">{state.jazzbar.rating}</div>
            </div>

          </div>
        </div>

        <div className="shopinfo-iconarea">
          {
            optionArr.map(el => {
              <span className="shopinfo-iconarea-featureitem">
                <img className="shopinfo-iconarea-featureitem-icon" src={el.img} />
                <span className="shopinfo-iconarea-featureitem-label">{el.content}</span>
              </span>
            })
          }
        </div>


        <div className="shopinfo-menuarea">
          <div className="shopinfo-menuarea-titlearea">
            <div className="shopinfo-menuarea-titlearea-label">메뉴</div>
          </div>

          <div className="shopinfo-menuarea-body">
            <div className="shopinfo-menuarea-link">메뉴판 사진 보기</div>
          </div>
        </div>


        <div className="shopinfo-shopphoto">
          <div className="shopinfo-shopphoto-titlearea">
            <div className="shopinfo-shopphoto-titlearea-label">사진</div>
          </div>
                    
          <div className="shopinfo-shopphoto-body">
            <div className="shopinfo-shopphoto-container">
              <div className="v-scroll-inner">
                <div className="shopinfo-shopphoto-contents">
                  {
                    state.barPhoto.map(el => {
                      <div className="shopinfo-shopphoto-object">
                        <a className="shopinfo-shopphoto-object-photobox" href="#">
                            <div className="shopinfo-shopphoto-object-photobox-img" style={`background-image: url(${el});`}></div>
                        </a>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="shopinfo-reservation">
                   
          <div className="shopinfo-reservation-header">
            <div className="shopinfo-reservation-label">예약</div>
            <div className="shopinfo-reservation-sublabel">{state.showList.length != 0 ? '라이브 공연을 예약하실 수 있습니다' : '예정 공연이 없습니다'}</div>
          </div>

          <div className="shopinfo-reservation-body">
            <div className="shopinfo-reservation-container">
              <div className="v-scroll-inner">
                <div className="shopinfo-reservation-contents">
                  {
                  state.showList.map(el => {
                    <div className="shopinfo-reservation-object" onClick={()=> goReservation(el)}>
                      <a className="shopinfo-reservation-object-photobox" href="#">
                        <div className="shopinfo-reservation-object-img" style={`background-image: url(${el.thumbnail});`}></div>
                      </a>

                      <div className="shopinfo-reservation-object-footer">
                        <div className="shopinfo-reservation-object-footer-name">{`공연 시작 시간 : ${el.date} ${el.time}`}</div>
                        <div className="shopinfo-reservation-object-footer-text">{el.content}</div>
                      </div>
                    </div>
                  })
                  }
                </div>
              </div>
            </div>
          </div>
                    
        </div>




        <div className="shopinfo-review">
          <div className="shopinfo-review-titlearea">
            <div className="shopinfo-review-titlearea-label">한줄평</div>
          </div>

          <div className="shopinfo-review-body">
            <div className="shopinfo-review-body-label">
              <div className="shopinfo-review-body-label-username">닉네임</div>
              <div className="shopinfo-review-body-label-rate">점수</div>
              <div className="shopinfo-review-body-label-review">한줄평</div>
            </div>

            {
              state.reviewList.map(el => {
                el.username !== state.user.username ? 
                (
                <div className="shopinfo-review-body-data">
                  <div className="shopinfo-review-body-data-username">{el.username}</div>
                  <div className="shopinfo-review-body-data-rate">{el.point}</div>
                  <div className="shopinfo-review-body-data-review">{el.content}</div>
                </div>
                ) : (
                  <>
                  {dispatch(saveMyId(el.id))}
                  {
                    state.togle.reviewModify ? (
                      <div className="shop-info-review-modify-form">
                        <select className="shopinfo-review-form-rate" onChange={(e)=>typingReview(e,'point')}>
                          <option value="" disabled selected>별점 선택</option>
                          <option value="5">★★★★★</option>
                          <option value="4">★★★★</option>
                          <option value="3">★★★</option>
                          <option value="2">★★</option>
                          <option value="1">★</option>
                        </select>
                        <input className="shopinfo-review-modify-imput" type="text" value={el.content} onChange={(e)=>typingReview(e,'content')}></input>
                        <button className="shopinfo-review-form-submit" onClick={()=> reviewUpdate()}>수정</button>
                      </div>
                      ) : state.togle.reviewDelete ?
                    (
                    <div className="shopinfo-review-body-data">
                      <div className="shopinfo-review-body-data-username">{el.username}</div>
                      <div className="shopinfo-review-body-data-rate">{el.point}</div>
                      <div className="shopinfo-review-body-data-review">{el.content}</div>
                      <div className="shop-info-review-modify-form">
                        <div className="shop-info-review-delete-confirm">정말 삭제하시겠습니까?</div>
                        <button className="shopinfo-review-modify" onClick={() => reviewDeleteRequest()}>삭제</button>
                        <button className="shopinfo-review-delete" onClick={() => deleteReview()}>취소</button>
                      </div>
                    </div>
                    ) : (
                    <div className="shopinfo-review-body-data">
                      <div className="shopinfo-review-body-data-username">{el.username}</div>
                      <div className="shopinfo-review-body-data-rate">{el.point}</div>
                      <div className="shopinfo-review-body-data-review">{el.content}</div>
                      <div className="shop-info-review-modify-form">
                        <button className="shopinfo-review-modify" onClick={() => modifyReview()}>수정</button>
                        <button className="shopinfo-review-delete" onClick={() => deleteReview()}>삭제</button>
                      </div>
                    </div>
                    )
                  }
                  </>
                )
              })
            }

            <div className="shopinfo-review-form">
              <div className="shopinfo-review-form-label">한줄평 작성</div>
                <input className="shopinfo-review-form-input" type="text" placeholder="한줄평을 작성해주세요" onChange={(e)=>typingReview(e,'content')}/>
                <select className="shopinfo-review-form-rate" onChange={(e)=>typingReview(e,'point')}>
                  <option value="" disabled selected>별점 선택</option>
                  <option value="5">★★★★★</option>
                  <option value="4">★★★★</option>
                  <option value="3">★★★</option>
                  <option value="2">★★</option>
                  <option value="1">★</option>
                </select>
              <button className="shopinfo-review-form-submit" onClick={()=> reviewPost()}>작성</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default JazzBar;