import React, {useEffect} from "react";
import DatePick from "../DatePick";
import Sidebar from "../Sidebar";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import ReserTable from './ReserTable'
import ReserHeader from './ReserHeader'
import axios from "axios";



const BreservationPage =() => {
  const jazzbarId = ""; //재즈바 아이디 가져오기
  useEffect(()=>{
    axios.get(process.env.REACT_APP_DB_HOST + "/reservationRead", jazzbarId)
  })


  return ( <div>
      <Sidebar></Sidebar>
     
      <div className="outer-box">
      {/* <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div> */}
        <div className="content">
          <div className="content-title">예약 관리</div>
          <hr class="hrcss"></hr>
          <ReserHeader></ReserHeader>
        </div>
      </div>
    </div>
  );
}

export default BreservationPage