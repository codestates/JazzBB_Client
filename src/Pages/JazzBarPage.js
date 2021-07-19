import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { setList, typeText, modifySwitch, saveMyId, setShow, setToken, dequeueHistory, saveThisHistory, setCurrentPage} from "../Components/redux/new/action";
import Modal from "react-modal";
import "../css/shopinfo.css"



function JazzBar(){ // { barName, mobile, area, thumbnail, address, serviceOption, rating, openTime, gpsX, gpsY }
  const { kakao } = window; 
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const [openTime, closeTime] = state.jazzbar.openTime.split('-');

  useEffect(()=>{
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
    axios.get(process.env.REACT_APP_DB_HOST + '/showRead', {id: state.jazzbar.id})
     .then(res => {
       const list = res.data.data.list;
       dispatch(setList(list, 'showList'));
     })
     .catch(err => console.log(err))
  
    axios.get(process.env.REACT_APP_DB_HOST + '/menuRead', {jazzbarId: state.jazzbar.id})
     .then(res => {
       const list = res.data.data.list;
       dispatch(setList(list, 'menu'));
     })
     .catch(err => console.log(err))
     
    axios.get(process.env.REACT_APP_DB_HOST + '/menuRead', {jazzbarId: state.jazzbar.id, type: 'photo'})
     .then(res => {
       const list = res.data.data.list;
       dispatch(setList(list, 'barPhoto'));
     })
     .catch(err => console.log(err))
  
    axios.get(process.env.REACT_APP_DB_HOST + '/reviewRead', {jazzbarId: state.jazzbar.id})
     .then(res => {
       const list = res.data.data.list;
       dispatch(setList(list, 'reviewList'));
     })
     .catch(err => console.log(err))
  },[])


  const typingReview = (e, variety) => {
    dispatch(typeText(e.target.value, variety));
  }

  const reviewPost = async () => {
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewCreate', { headers: { authorization: state.user.token }, withCredentials: true },{
      jazzbarId: state.jazzbar.id, 
      point: state.review.point, 
      content: state.review.content
    })
     .then(res => {
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
     })
     .catch(err => console.log(err))
  }
    
  const goReservation = (show) => {
    dispatch(setShow(show));
  }
    
  const modifyReview = () => {
    dispatch(modifySwitch('reviewModify'));
  }
    
  const deleteReview = () => {
    dispatch(modifySwitch('reviewDelete'));
  }
    
  const reviewUpdate = async () => {
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewUpdate', { headers: { authorization: state.user.token }, withCredentials: true } ,{
      jazzbarId: state.jazzbar.id, 
      point: state.review.point, 
      content: state.review.content
    })
     .then(res => {
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
      dispatch(modifySwitch('reviewModify'));
     })
     .catch(err => console.log(err))
  }

  const reviewDeleteRequest = async () => {
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewDelete', { headers: { authorization: state.user.token }, withCredentials: true },{
      id: state.myReviewId
    })
     .then(res => {
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
      dispatch(modifySwitch('reviewDelete'));
     })
     .catch(err => console.log(err))
  }
  const menuModalTogle = () => {
    dispatch(modifySwitch('menuModal'))
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  useEffect(()=>{
    var container = document.getElementById('map');
    let gpsY = state.jazzbar.gpsY
    let gpsX = state.jazzbar.gpsX
    var options = {
      center: new kakao.maps.LatLng(gpsY, gpsX),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(gpsY, gpsX); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
    }, [modalIsOpen])
 
 

  function closeModal() {
    setIsOpen(false);
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
              <button className="shopinfo-header-infoarea-tmapbtn" onClick={openModal}>지도 위치 보기</button>{/* 티맵 구현 필요 */}
            </div>

      {!modalIsOpen  ? ( <div id="map" onClick={closeModal} style={{width:"100%", height:"400px", display:"none"}}></div> ) : <div id="map"onClick={closeModal} style={{width:"100%", height:"400px"}}></div>}
      {/* <div id="map" style={{width:"500px", height:"400px"}}></div>  */}

            <div className="shopinfo-header-infoarea-phone">{state.jazzbar.mobile}</div>
            <div className="shopinfo-header-infoarea-time">{`${state.jazzbar.openTime.split('-')[0]} ~ ${state.jazzbar.openTime.split('-')[1]}`}</div>

            <div className="shopinfo-header-infoarea-ratingarea">
              <div className="shopinfo-header-infoarea-ratingarea-star">⭐</div>
              <div className="shopinfo-header-infoarea-ratingarea-rate">{state.jazzbar.rating}</div>
            </div>

          </div>
        </div>

        <div className="shopinfo-iconarea">
          {
            state.jazzbar.serviceOption.split('').map(number => {
              for(let option of state.serviceOption){
                if(number === option.id){
                  return (
                    <span className="shopinfo-iconarea-featureitem">
                      <img className="shopinfo-iconarea-featureitem-icon" src={option.img} />
                      <span className="shopinfo-iconarea-featureitem-label">{option.content}</span>
                    </span>
                  )
                }
              }
            })
          }
        </div>


        <div className="shopinfo-menuarea">
          <div className="shopinfo-menuarea-titlearea">
            <div className="shopinfo-menuarea-titlearea-label">메뉴</div>
          </div>

          <div className="shopinfo-menuarea-body">
            <div className="shopinfo-menuarea-link" onClick={()=> menuModalTogle()}>메뉴판 사진 보기</div>
          </div>
        </div>

        <Modal className="shopinfo-menuarea-modal" isOpen={state.togle.menuModal} onRequestClose={menuModalTogle}>
          
        <div className="closebutton">
                <button className="close" onClick={() => menuModalTogle()}>X</button>
            </div>
          
          <div className="shopinfo-menu-object">
            
            <div className="shopinfo-menu-object-photobox">
            {
              state.menu.map(el => {
                return (
                    <img className="shopinfo-menu-object-img" src={el.thumbnail}></img>
                )
              })
            }
            </div>
          </div>
        </Modal>

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
                      return (

                         <div className="shopinfo-shopphoto-object">
                            <a className="shopinfo-shopphoto-object-photobox" href="#">
                            <div className="shopinfo-shopphoto-object-photobox-img" style={{"background-image" : "url("+el+")"}}></div>
                        </a>
                      </div>

                      )
                      
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
            <div className="shopinfo-reservation-sublabel">{state.showList.length != 0 ? '라이브 공연을 예약하실 수 있습니다' : '예정된 공연이 없습니다. 매장에 문의하여 주세요'}</div>
          </div>

          <div className="shopinfo-reservation-body">
            <div className="shopinfo-reservation-container">
              <div className="v-scroll-inner">
                <div className="shopinfo-reservation-contents">
                  {
                  state.showList.map(el => {
                    return (

                      <Link to="/reservation" onClick={()=> goReservation(el)}>
                      <div className="shopinfo-reservation-object" >
                        <a className="shopinfo-reservation-object-photobox" href="#">
                          <div className="shopinfo-reservation-object-img" style={{"background-image" : "url("+el.thumbnail+")"}}></div>
                        </a>

                        <div className="shopinfo-reservation-object-footer">
                          <div className="shopinfo-reservation-object-footer-label">{el.player}</div>
                          <div className="shopinfo-reservation-object-footer-name">{`${el.date} ${el.time}`}</div>
                          <div className="shopinfo-reservation-object-footer-text">{el.content}</div>
                        </div>
                      </div>
                    </Link>


                    )
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
              <div className="shopinfo-review-form-label">작성</div>
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