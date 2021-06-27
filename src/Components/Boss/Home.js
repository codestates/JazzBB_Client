import React, { Component, useState } from "react";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="bossHeader">재즈바 사진</div>
      <div className="contentBox">
        <div className="left-section">
          <div className="title">
            <div className="box">
              <img class="profile" src="img/profile.png" alt=""></img>
            </div>
            <div className="barName">Tokyo Jazz</div>
          </div>
          <div className="description">
            <div>서울특별시 강남구 테헤란로87길 45 삼성빌딩</div>
            <div>19:00 - 03:00</div>
            <div>메뉴</div>

           
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
