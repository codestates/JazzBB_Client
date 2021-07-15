import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from './../Sidebar'


function InfoUpdate(){
    // data = jazzbar 정보 임.
    const data = useSelector((state) => state.reducer.jazzbar);
    return(
        <div>
          <Sidebar></Sidebar> 
          <div className="contentBox">
            <h1>정보 </h1>

            <div className="barName">
            <div>재즈바 이름</div>
              <div>{data.barName}</div>
            </div>

            <div className="barAddress">
              <div>가게 주소</div>
              <div>{data.address}</div>
            </div>

            <div className="barMobile">
            <div>가게 전화번호</div>
              <div>{data.mobile}</div>
            </div>

            <div className="defaultSeat">
              <div>가게 좌석</div>
              <div>{data.defaultSeat}</div>
            </div>

            <div className="serviceOption">
              <div>serviceOption</div>
              {/* {data.serviceOption.map(el => <div>{el}</div>)} */}
            </div>
            {/* <button>수정</button> */}
            {/* 수정버튼 클릭 시 회원가입 후 렌더되는 가게정보입력 페이지로 렌더링.
            입력사항 전부 디폴트 값으로 넘겨주기. */}
            
          </div>
        </div>
    )
}

export default InfoUpdate;