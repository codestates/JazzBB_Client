import React, { useEffect } from "react";
// import DatePick from "../DatePick";
import Sidebar from "../Sidebar";
import axios from "axios";
// import { setToken } from "../../redux/new/action"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ReserHeader from "./ReserHeader";
import {
  setBossReservationList,
  setBossShowList,
  setToken,
  setList
} from "../../redux/new/action";
import "../RvManage.css";

const BreservationPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  const jazzbarId = useSelector((state) => state.reducer.jazzBarId);
  const [All, SetNotAll] = React.useState(true);
  const set = () => {
    SetNotAll(true);
  };

  const unset = () => {
    SetNotAll(false);
  };

  
  useEffect(async () => {
    let reservationList = [];
    state.showList.forEach(async (el) => {
      await axios.post(process.env.REACT_APP_DB_HOST + '/reservationRead', { showId: el.id }, { headers: { authorization: state.token }, withCredentials: true })
        .then(res => {
          const token = res.data.data.token;
          const reservation = res.data.data.list;
          reservationList = [...reservationList, ...reservation];
          dispatch(setToken(token));
        })
    })
    dispatch(setList(reservationList, 'showList'));
  }, []);

  
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
        {/* <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div> */}
        <div className="content">
          <div className="content-title">예약 관리</div>
          <hr class="hrcss"></hr>
          <ReserHeader set={set} unset={unset} all={All}></ReserHeader>
          {/* <ReserByDate set ={set} unset={unset} all={All}></ReserByDate> */}
        </div>
      </div>
    </div>
  );
};

export default BreservationPage;
