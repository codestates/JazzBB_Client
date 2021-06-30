import React from "react";
import Sidebar from "../Sidebar";
import "./ShowManage.css";
// import DatePick from "../DatePick";
import ShowHeader from './ShowHeader'



function BshowPage() {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
        <div className="bossHeader">
          <img src="/img/tokyoJazz.jpg" alt="" />
        </div>
        <div className="content">
          <div className="content-title">공연 관리</div>
          <hr class="hrcss"></hr>

          {/* 공연리스트 */}
          <div clssName ="b-show-list">
            <ShowHeader></ShowHeader>
            <div></div>
 
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default BshowPage;
