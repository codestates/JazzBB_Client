import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setMenuList, setPhotoList, setShowList, setReviewList } from "../Components/redux/new/action";


function JazzBar({jazzBar}){ // { barName, mobile, area, thumbnail, address, serviceOption, rating, openTime, gpsX, gpsY }
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const [openTime, closeTime] = jazzBar.openTime.split(',');

  axios.get(process.env.REACT_APP_DB_HOST + '/showRead', {id: jazzBar.id})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setShowList(list));
   })

  axios.get(process.env.REACT_APP_DB_HOST + '/menuRead', {jazzbar_id: jazzBar.id})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setMenuList(list))
   })
   
  axios.get(process.env.REACT_APP_DB_HOST + '/menuRead', {jazzbar_id: jazzBar.id, type: 'photo'})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setPhotoList(list));
   })

  axios.get(process.env.REACT_APP_DB_HOST + '/reviewRead', {jazzbarId: jazzBar.id})
   .then(res => {
     const list = res.data.data.list;
     dispatch(setReviewList(list));
   })

  const optionArr = jazzBar.serviceOption.split('').map(el => {
    state.serviceOption.forEach(ele => {
      if(el === ele.id){
        return ele;
      };
    });
  })
  const reviewPost = () =>{

  }


 

  return (
    <div class="shopinfo">

      <div class="shopinfo-body">
        <div class="shopinfo-header">

          <div class="shopinfo-header-imgarea">
            <img class="shopinfo-header-img" src={jazzBar.thumbnail} alt="headerimg" />
          </div>

          <div class="shopinfo-header-infoarea">
            <div class="shopinfo-header-infoarea-shopname">{jazzBar.barName}</div>
            <div class="shopinfo-header-infoarea-geo">
              <div class="shopinfo-header-infoarea-location">{jazzBar.area}</div>
              <button class="shopinfo-header-infoarea-tmapbtn">Tmap 길안내</button>{/* 티맵 구현 필요 */}
            </div>

            <div class="shopinfo-header-infoarea-phone">{jazzBar.mobile}</div>
            <div class="shopinfo-header-infoarea-time">{`${openTime} ~ ${closeTime}`}</div>

            <div class="shopinfo-header-infoarea-ratingarea">
              <div class="shopinfo-header-infoarea-ratingarea-star">⭐</div>
              <div class="shopinfo-header-infoarea-ratingarea-rate">{jazzBar.rating}</div>
            </div>

          </div>
        </div>

        <div class="shopinfo-iconarea">
          {
            optionArr.map(el => {
              <span class="shopinfo-iconarea-featureitem">
                <img class="shopinfo-iconarea-featureitem-icon" src={el.img} />
                <span class="shopinfo-iconarea-featureitem-label">{el.content}</span>
              </span>
            })
          }
        </div>


        <div class="shopinfo-menuarea">
          <div class="shopinfo-menuarea-titlearea">
            <div class="shopinfo-menuarea-titlearea-label">메뉴</div>
          </div>

          <div class="shopinfo-menuarea-body">
            <div class="shopinfo-menuarea-link">메뉴판 사진 보기</div>
          </div>
        </div>


        <div class="shopinfo-shopphoto">
          <div class="shopinfo-shopphoto-titlearea">
            <div class="shopinfo-shopphoto-titlearea-label">사진</div>
          </div>
                    
          <div class="shopinfo-shopphoto-body">
            <div class="shopinfo-shopphoto-container">
              <div class="v-scroll-inner">
                <div class="shopinfo-shopphoto-contents">
                  {
                    state.barPhoto.map(el => {
                      <div class="shopinfo-shopphoto-object">
                        <a class="shopinfo-shopphoto-object-photobox" href="#">
                            <div class="shopinfo-shopphoto-object-photobox-img" style={`background-image: url(${el});`}></div>
                        </a>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>

        </div>


        <div class="shopinfo-reservation">
                   
          <div class="shopinfo-reservation-header">
            <div class="shopinfo-reservation-label">예약</div>
            <div class="shopinfo-reservation-sublabel">{state.showList.length != 0 ? '라이브 공연을 예약하실 수 있습니다' : '예정 공연이 없습니다'}</div>
          </div>

          <div class="shopinfo-reservation-body">
            <div class="shopinfo-reservation-container">
              <div class="v-scroll-inner">
                <div class="shopinfo-reservation-contents">
                  {
                  state.showList.map(el => {
                    <div class="shopinfo-reservation-object">
                      <a class="shopinfo-reservation-object-photobox" href="#">
                        <div class="shopinfo-reservation-object-img" style={`background-image: url(${el.thumbnail});`}></div>
                      </a>

                      <div class="shopinfo-reservation-object-footer">

                        <div class="shopinfo-reservation-object-footer-name">{`공연 시작 시간 : ${el.date} ${el.time}`}</div>
                        <div class="shopinfo-reservation-object-footer-text">{el.content}</div>

                      </div>
                    </div>
                  })
                  }
                </div>
              </div>
            </div>
          </div>
                    
        </div>




        <div class="shopinfo-review">
          <div class="shopinfo-review-titlearea">
            <div class="shopinfo-review-titlearea-label">한줄평</div>
          </div>

          <div class="shopinfo-review-body">
            <div class="shopinfo-review-body-label">
              <div class="shopinfo-review-body-label-username">닉네임</div>
              <div class="shopinfo-review-body-label-rate">점수</div>
              <div class="shopinfo-review-body-label-review">한줄평</div>
            </div>
            
            {
              state.review.map(el => {
                el.username !== state.user.username ? 
                (
                <div class="shopinfo-review-body-data">
                  <div class="shopinfo-review-body-data-username">{el.username}</div>
                  <div class="shopinfo-review-body-data-rate">{el.point}</div>
                  <div class="shopinfo-review-body-data-review">{el.content}</div>
                </div>
                )
                :(
                  <div class="shopinfo-review-body-data">
                  <div class="shopinfo-review-body-data-username">{el.username}</div>
                  <div class="shopinfo-review-body-data-rate">{el.point}</div>
                  <div class="shopinfo-review-body-data-review">{el.content}</div>
                </div>
                // 여기에 버튼 수정 삭제버튼 추가해줘용
                )
              })
            }

            <div class="shopinfo-review-form">
              <div class="shopinfo-review-form-label">한줄평 작성</div>
                <input class="shopinfo-review-form-input" type="text" placeholder="한줄평을 작성해주세요" />
                <select class="shopinfo-review-form-rate">
                  <option value="" disabled selected>별점 선택</option>
                  <option value="5">★★★★★</option>
                  <option value="4">★★★★</option>
                  <option value="3">★★★</option>
                  <option value="2">★★</option>
                  <option value="1">★</option>
                </select>
              <button class="shopinfo-review-form-submit" onClick={()=> reviewPost()}>작성</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default JazzBar;