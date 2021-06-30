import React from "react";
import Sidebar from "./Sidebar";
import "./ShowManage.css";
import DatePick from "./DatePick";
// import { CgFileAdd } from "react-icons/cg";


function BshowPage() {
  // let iconStyles = {fontSize: "5em" };
  return (
    <div >
      <Sidebar></Sidebar>
      <div className="outer-box">
      <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div>
      <div className="content">
      <div className="content-title">공연 관리</div>
        <hr class="hrcss"></hr>
        <DatePick></DatePick>

        <div className="show-box">
          <div className="show-photo-box">
            
          <div className="show-photo"> <img src="/img/addphoto.png" alt=""/></div>
          <div className="show-photo"><img src="/img/addphoto.png" alt=""/></div>
          <div className="show-photo"><img src="/img/addphoto.png" alt=""/></div>
          <div className="show-photo"><img src="/img/addphoto.png" alt=""/></div>
          </div>
            
            
            <div className="bottom-section"> 
          <div className="show-description">
            <textarea rows="15" cols="100"></textarea>
          </div>

          <div className="show-button">
          <button>저장</button>
          </div>
          </div>

        </div>
      </div>
      </div>

    </div>
  );
}

export default BshowPage;
