import React, { useState } from "react";
import DatePick from "./DatePick";
import Sidebar from "./Sidebar";


function RvManage() {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
      <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div>
        <div className="content">
          <div className="content-title">예약 관리</div>
          <hr class="hrcss"></hr>
          <DatePick></DatePick>

          <div className="status-box">
            <div className="status-f status">
              <span className="status-title">신청</span>
              <span className="status-number">52</span>
            </div>

            <div className="status-s status">
              <span className="status-title">승인 </span>
              <span className="status-number">2</span>
            </div>

            <div className="status-t status">
              <span className="status-title">거절 </span>
              <span className="status-number">42</span>
            </div>

            <div className="status-fourth status">
              <span className="status-title">대기 </span>
              <span className="status-number">52</span>
            </div>
          </div>

          <div className="rv-info">
            <div className="rv-info-contents">예약정보</div>
            <table id="customers">
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>연락처</th>
                <th>인원</th>
                <th>승인상태</th>
              </tr>
              <tr>
                <td>01</td>
                <td>김코딩</td>
                <td>010-000-0000</td>
                <td>03</td>
                <td>보류</td>
              </tr>
              <tr>
                <td>01</td>
                <td>성준락</td>
                <td>010-000-0000</td>
                <td>01</td>
                <td>승인</td>
              </tr>
              <tr>
                <td>01</td>
                <td>김태선</td>
                <td>010-000-0000</td>
                <td>03</td>
                <td>거절</td>
              </tr>
              <tr>
                <td>01</td>
                <td>김수황</td>
                <td>010-000-0000</td>
                <td>02</td>
                <td>보류</td>
              </tr>
              <tr>
                <td>01</td>
                <td>김수황</td>
                <td>010-000-0000</td>
                <td>03</td>
                <td>보류</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RvManage;
