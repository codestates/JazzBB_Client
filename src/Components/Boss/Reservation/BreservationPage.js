import React, { useEffect } from "react";
// import DatePick from "../DatePick";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ReserHeader from "./ReserHeader";
import {
  setBossReservationList,
  setBossShowList,
  // setToken,
} from "../../redux/new/action";
import "../RvManage.css";

const BreservationPage = () => {
  const dispatch = useDispatch();
  const jazzbarId = useSelector((state) => state.reducer.jazzBarId);
  const [All, SetNotAll] = React.useState(true);
  const set = () => {
    SetNotAll(true);
  };

  const unset = () => {
    SetNotAll(false);
  };

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_DB_HOST + "/showRead", jazzbarId)
  //     .then((res) => {
  //       const showlist = res.data.data;
  //       dispatch(setBossShowList(showlist));
  //     })
  //     .then(
  //       axios
  //         .get(process.env.REACT_APP_DB_HOST + "/reservationRead", jazzbarId)
  //         .then((res) => {
  //           const list = res.data.data.list;
  //           dispatch(setBossReservationList(list));
  //         })
  //     );
  // }, []);

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
