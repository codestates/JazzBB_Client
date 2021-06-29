import React, { Component, useState } from "react";
import RvManage from "../Components/Boss/RvManage";
import Sidebar from "../Components/Boss/Sidebar";
import DatePick from "../Components/Boss/DatePick";
import "../css/sidebar.css";
import "../css/BossMainPage.css"
import RvManagecopy from "../Components/Boss/RvManagecopy";

function BossMainPagecopy() {
    
  return (
    <div className="App">
      <Sidebar>
      </Sidebar>
      <div className="outer-box">
      <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div>
        <div className="content">
          <div className="content-title">예약 관리</div>
          <hr class="hrcss"></hr>
          <DatePick></DatePick>
          </div>
              <RvManagecopy></RvManagecopy>
          </div>
    </div>
  );
}

export default BossMainPagecopy;
