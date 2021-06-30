import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setMenuList, setPhotoList, setShowList } from "../Components/redux/new/action";


function JazzBar({jazzBar}){ // { barName, mobile, area, thumbnail, address, serviceOption, rating, openTime, gpsX, gpsY }
  const dispatch = useDispatch();
  const state = useSelector(state => state.itemReducer);
  const [openTime, closeTime] = jazzBar.openTime.split(',');
  const optionArr = jazzBar.serviceOption.split('').map(el => {
    state.serviceOption.forEach(ele => {
      if(el === ele.id){
        return ele;
      };
    });
  })
  useEffect(()=> {
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
  })

 

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
                    <div class="shopinfo-reservation-titlearea">
                        <div class="shopinfo-reservation-titlearea-label">예약</div>
                    </div>

                    <div class="shopinfo-reservation-body">
                        <div class="shopinfo-reservation-link">예약 신청 페이지</div>
                    </div>
                    
                </div>

            </div>

        </div>
  )
}

export default JazzBar;