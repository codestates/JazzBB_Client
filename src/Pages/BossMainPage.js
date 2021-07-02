import React, { Component, useState } from "react";
import RvManage from "../Components/Boss/RvManage";
import Sidebar from "../Components/Boss/Sidebar";
import "../css/sidebar.css";
import "../css/BossMainPage.css"

function BossMainPage() {
    
  return (
    <div className="App">
      <Sidebar>
      </Sidebar>
      {/* <img src="/img/tokyoJazz.jpg" alt=""/> */}
      <div className="alertBox">
        <h2>승인 대기 중</h2>

      </div>
    </div>
  );
}

export default BossMainPage;
