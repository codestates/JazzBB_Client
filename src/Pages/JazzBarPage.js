/*global kakao*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setList,
  typeText,
  modifySwitch,
  setShow,
  setToken,
  saveThisHistory,
  setCurrentPage,
} from "../Components/redux/new/action";
import Modal from "react-modal";
import "../css/shopinfo.css";

function JazzBar() {
  const { kakao } = window;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  let jazzBarId ;  //menuread boss 일경우 ....
  const thisBar = state.barList.find((el) => el.id === state.currentJazzbar);
  let thisDate = new Date()
    .toLocaleDateString()
    .replace(/\. /g, "-")
    .replace(/\./g, "");
  if (thisDate[6] === "-") {
    let front = thisDate.slice(0, 5);
    let tail = thisDate.slice(5);
    thisDate = front + 0 + tail;
  }
  if (thisDate[thisDate.length - 2] === "-") {
    let front = thisDate.slice(0, 8);
    let tail = thisDate.slice(8);
    thisDate = front + 0 + tail;
  }
  let thisTime = new Date().toTimeString().slice(0, 5).replace(":", "");
  let curTime = thisDate + thisTime;
   const [display, setDisplay] =useState('none')

  useEffect(async () => {
    dispatch(saveThisHistory());
    dispatch(setCurrentPage(window.location.pathname));
    await axios
      .post(process.env.REACT_APP_DB_HOST + "/showRead", {
        jazzbarId: state.currentJazzbar,
      })
      .then((res) => {
        const list = res.data.data;
        dispatch(setList(list, "showList"));
      })
      .catch((err) => console.log(err));

    await axios
      .post(process.env.REACT_APP_DB_HOST + "/menuRead", {
        jazzbarId: state.currentJazzbar,
      })
      .then((res) => {
        let list = res.data.data.data[0].thumbnail
        list = list.split(',')
        dispatch(setList(list, "menu"));
      })
      .catch((err) => console.log(err));

    await axios
      .post(process.env.REACT_APP_DB_HOST + "/reviewRead", {
        jazzbarId: state.currentJazzbar,
      })
      .then((res) => {
        const reviewList = res.data.data.list;
        dispatch(setList(reviewList, "reviewList"));
      })
      .catch((err) => console.log(err));
  }, []);

  const getPlayer = (player) =>{
   player = JSON.parse(player)
   for (let position in player){
     return (<div>{`${position} : ${player[position]}`}</div>)
   }

  }
  const typingReview = (e, variety) => {
    dispatch(typeText(e.target.value, variety));
  };

  const reviewPost = async () => {
    if (!state.isLogin) {
      alert("로그인 후 리뷰 작성이 가능합니다.");
      dispatch(modifySwitch("loginModal"));
    } else if (!state.review.point || !state.review.content) {
      alert("별점과 댓글을 모두 작성해주세요.");
    } else {
      await axios
        .post(
          process.env.REACT_APP_DB_HOST + "/reviewCreate",
          {
            jazzbarId: state.currentJazzbar,
            point: state.review.point,
            content: state.review.content,
          },
          { headers: { authorization: state.token }, withCredentials: true }
        )
        .then((res) => {
          const token = res.data.data.accessToken;
          dispatch(setToken(token));
        })
        .catch((err) => console.log(err));

      await axios
        .post(process.env.REACT_APP_DB_HOST + "/reviewRead", {
          jazzbarId: state.currentJazzbar,
        })
        .then((res) => {
          const reviewList = res.data.data.list;
          dispatch(setList(reviewList, "reviewList"));
          dispatch(typeText("", "content"));
        })
        .catch((err) => console.log(err));
    }
  };

  const goReservation = (show) => {
    dispatch(setShow(show));
  };

  const modifyReview = () => {
    dispatch(modifySwitch("reviewModify"));
  };

  const deleteReview = () => {
    dispatch(modifySwitch("reviewDelete"));
  };

  const reviewUpdate = async (el) => {
    await axios
      .post(
        process.env.REACT_APP_DB_HOST + "/reviewUpdate",
        {
          // jazzbarId: state.currentJazzbar,
          id: el.id,
          point: state.review.point,
          content: state.review.content,
        },
        { headers: { authorization: state.token }, withCredentials: true },
      )
      .then((res) => {
        const token = res.data.data.accessToken;
        dispatch(setToken(token));
        dispatch(modifySwitch("reviewModify"));
      })
      .catch((err) => console.log(err));

      await axios
      .post(process.env.REACT_APP_DB_HOST + "/reviewRead", {
        jazzbarId: state.currentJazzbar,
      })
      .then((res) => {

        const reviewList = res.data.data.list;
        dispatch(setList(reviewList, "reviewList"));
      })
      .catch((err) => console.log(err));
  };

  const reviewDeleteRequest = async (el) => {
    await axios
      .post(
        process.env.REACT_APP_DB_HOST + "/reviewDelete",
        {
          id: el.id,
        },
        { headers: { authorization: state.token }, withCredentials: true }
      )
      .then((res) => {
        const token = res.data.data.accessToken;
        dispatch(setToken(token));
        dispatch(modifySwitch("reviewDelete"));
      })
      .catch((err) => console.log(err));
      await axios
      .post(process.env.REACT_APP_DB_HOST + "/reviewRead", {
        jazzbarId: state.currentJazzbar,
      })
      .then((res) => {

        const reviewList = res.data.data.list;
        dispatch(setList(reviewList, "reviewList"));
      })
      .catch((err) => console.log(err));
  };
  const menuModalTogle = () => {
    dispatch(modifySwitch("menuModal"));
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
      setDisplay(true)
      const script = document.createElement("script");
  script.async = true;
  script.src =
    "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d5d2b234d7581ef9f9bc2eb3fd250c1e&libraries=services";
  document.head.appendChild(script);

  script.onload = () => {
    kakao.maps.load(() => {
      let container = document.getElementById("map");
      let gpsY = thisBar.gpsY
      let gpsX = thisBar.gpsX
      let options = {
        center: new kakao.maps.LatLng(gpsY, gpsX),
        level: 3
      };

      const map = new window.kakao.maps.Map(container, options);
        
       var markerPosition  = new window.kakao.maps.LatLng(gpsY, gpsX);
      var marker = new window.kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
    map.relayout()
  });
};
  }
 

  

  function closeModal() {
    setIsOpen(false);
  setDisplay('none')

  }
  return (
    <div className="shopinfo">
      <div className="shopinfo-body">
        <div className="shopinfo-header">
          <div className="shopinfo-header-imgarea">
            <img
              className="shopinfo-header-img"
              src={
                thisBar ? thisBar.thumbnail : "/resource/jazzbb_logo_black.png"
              }
              alt="headerimg"
            />
          </div>

          <div className="shopinfo-header-infoarea">
            <div className="shopinfo-header-infoarea-shopname">
              {thisBar.barName}
            </div>
            <div className="shopinfo-header-infoarea-geo">
              <div className="shopinfo-header-infoarea-location">
                {thisBar.address}
              </div>
              <button
                className="shopinfo-header-infoarea-tmapbtn"
                onClick={!modalIsOpen ? openModal : closeModal}
              >
                지도 위치 보기
              </button>
            </div>

             
            <div className="shopinfo-header-infoarea-phone">
              {thisBar.mobile}
            </div>
            <div className="shopinfo-header-infoarea-time">
              {thisBar.openTime.replace("-", "~")}
            </div>

            <div className="shopinfo-header-infoarea-ratingarea">
              <div className="shopinfo-header-infoarea-ratingarea-star">⭐</div>
              <div className="shopinfo-header-infoarea-ratingarea-rate">
                {thisBar.rating}
              </div>
            </div>
          </div>

          <div
                id="map"
                onClick={closeModal}
                style={{ width: "100%", height: "400px", display: display }}
              >
              </div>
        </div>

        {thisBar.serviceOption ? (
          <div className="shopinfo-iconarea">
            {thisBar.serviceOption.split("").map((number) => {
              for (let option of state.serviceOption) {
                if (number === option.id) {
                  return (
                    <span className="shopinfo-iconarea-featureitem">
                      <img
                        className="shopinfo-iconarea-featureitem-icon"
                        src={option.img}
                      />
                      <span className="shopinfo-iconarea-featureitem-label">
                        {option.content}
                      </span>
                    </span>
                  );
                }
              }
            })}
          </div>
        ) : null}

        <div className="shopinfo-menuarea">
          <div className="shopinfo-menuarea-titlearea">
            <div className="shopinfo-menuarea-titlearea-label">메뉴</div>
          </div>

          <div className="shopinfo-menuarea-body">
            
              {state.menu[0] !== ""
                ? state.menu.map((el) => {
                    return (
                      <div class="img-wrap">
                      <img
                        className="menuImg"
                        src={el}
                        alt =""
                      ></img>
                      </div>
                    );
                  })
                : <div className="shopinfo-reservation-sublabel">
                  등록된 메뉴 이미지가 없습니다. 매장에 문의하여 주세요</div>}
            
          </div>
        </div>

        {/* <Modal
          className="shopinfo-menuarea-modal"
          isOpen={state.togle.menuModal}
          onRequestClose={menuModalTogle}
        >
          <div className="closebutton">
            <button className="close" onClick={() => menuModalTogle()}>
              X
            </button>
          </div>

          <div className="shopinfo-menu-object">
            <div className="shopinfo-menu-object-photobox">
            
          
            </div>
          </div>
        </Modal> */}

        <div className="shopinfo-reservation">
          <div className="shopinfo-reservation-header">
            <div className="shopinfo-reservation-label">예약</div>
            <div className="shopinfo-reservation-sublabel">
              {state.showList.length != 0
                ? "라이브 공연을 예약하실 수 있습니다"
                : "예정된 공연이 없습니다. 매장에 문의하여 주세요"}
            </div>
          </div>

          <div className="shopinfo-reservation-body">
            <div className="shopinfo-reservation-container">
              <div className="v-scroll-inner">
                <div className="shopinfo-reservation-contents">
                  {state.showList.length !== 0
                    ? state.showList.map((el) => {
                      let [start,end] = el.time.split('-')
                        return Number(
                          el.date.replace(/-/g, "") + start.replaceAll(":", "")
                        ) - Number(curTime.replaceAll(/-/g, "")) >= 0 ? (
                          <Link
                            to="/reservation"
                            onClick={() => goReservation(el)}
                          >
                            <div className="shopinfo-reservation-object">
                              <a
                                className="shopinfo-reservation-object-photobox"
                                href="#"
                              >
                                <img className="shopinfo-reservation-object-img" src={el.thumbnail} alt=""></img>
                              </a>
                              
                              <div className="shopinfo-reservation-object-footer">
                                <div className="shopinfo-reservation-object-footer-label">{getPlayer(el.player)}</div>
                                <div className="shopinfo-reservation-object-footer-name">{`${el.date} ${el.time}`}</div>
                                <div className="shopinfo-reservation-object-footer-text">
                                  {el.content}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : null;
                      })
                    : null}
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

            {state.reviewList.length !== 0
              ? state.reviewList.map((el) => {
                  return !state.user ||
                    el.user.id !== state.user.userId ? (
                    <div className="shopinfo-review-body-data">
                      <div className="shopinfo-review-body-data-username">
                        {el.user.username}
                      </div>
                      <div className="shopinfo-review-body-data-rate">
                        {el.point}
                      </div>
                      <div className="shopinfo-review-body-data-review">
                        {el.content}
                      </div>
                    </div>
                  ) : (
                    // 여기부터
                    <>
                      {state.togle.reviewModify ? (
                        <div className="shop-info-review-modify-form">
                          <select
                            className="shopinfo-review-form-rate"
                            onChange={(e) => typingReview(e, "point")}
                            defaultValue=""
                          >
                            <option key="none" value="" disabled>
                              별점 선택
                            </option>
                            <option key="5" value="5">
                              ★★★★★
                            </option>
                            <option key="4" value="4">
                              ★★★★
                            </option>
                            <option key="3" value="3">
                              ★★★
                            </option>
                            <option key="2" value="2">
                              ★★
                            </option>
                            <option key="1" value="1">
                              ★
                            </option>
                          </select>
                          <input
                            className="shopinfo-review-modify-imput"
                            type="text"
                            defaultValue={el.content}
                            onChange={(e) => typingReview(e, "content")}
                          ></input>
                          <button
                            className="shopinfo-review-form-submit"
                            onClick={() => reviewUpdate(el)}
                          >
                            수정
                          </button>
                          <button
                            className="shopinfo-review-form-modify-cancel"
                            onClick={() => modifyReview()}
                          >
                            수정취소
                          </button>
                        </div>
                      ) : state.togle.reviewDelete ? (
                        <div className="shopinfo-review-body-data">
                          <div className="shopinfo-review-body-data-username">
                            {el.user.username}
                          </div>
                          <div className="shopinfo-review-body-data-rate">
                            {el.point}
                          </div>
                          <div className="shopinfo-review-body-data-review">
                            {el.content}
                          </div>
                          <div className="shop-info-review-modify-form">
                            <div className="shop-info-review-delete-confirm">
                              정말 삭제하시겠습니까?
                            </div>
                            <button
                              className="shopinfo-review-modify"
                              onClick={() => reviewDeleteRequest(el)}
                            >
                              삭제
                            </button>
                            <button
                              className="shopinfo-review-delete"
                              onClick={() => deleteReview()}
                            >
                              취소
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="shopinfo-review-body-data">
                          <div className="shopinfo-review-body-data-username">
                            {el.user.username}
                          </div>
                          <div className="shopinfo-review-body-data-rate">
                            {el.point}
                          </div>
                          <div className="shopinfo-review-body-data-review">
                            {el.content}
                          </div>
                          <div className="shop-info-review-modify-form">
                            <button
                              className="shopinfo-review-modify"
                              onClick={() => modifyReview()}
                            >
                              수정
                            </button>
                            <button
                              className="shopinfo-review-delete"
                              onClick={() => deleteReview()}
                            >
                              삭제
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })
              : null}
              {state.user.usertype === "boss" ? (
                null
              ) : (
                <>
            <div className="shopinfo-review-form">

              <div className="shopinfo-review-form-label">작성</div>
                <input
                  className="shopinfo-review-form-input"
                  type="text"
                  placeholder="한줄평을 작성해주세요"
                  onChange={(e) => typingReview(e, "content")}
                />
                <select
                className="shopinfo-review-form-rate"
                onChange={(e) => typingReview(e, "point")}
                defaultValue=""
              >
                <option key="none" value="" disabled>
                  별점 선택
                </option>
                <option key="5" value="5">
                  ★★★★★
                </option>
                <option key="4" value="4">
                  ★★★★
                </option>
                <option key="3" value="3">
                  ★★★
                </option>
                <option key="2" value="2">
                  ★★
                </option>
                <option key="1" value="1">
                  ★
                </option>
              </select>
              <button
                className="shopinfo-review-form-submit"
                onClick={() => reviewPost()}
              >
                작성
              </button>
            </div>

              </>
              )}
             {/* 여기까지 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JazzBar;
