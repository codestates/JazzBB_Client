import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ReserHeader from "./ReserHeader";
import {
  setBossJazzBar,setToken, setBossReservationList
} from "../../redux/new/action";
import "../RvManage.css";

const BreservationPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  const [All, SetNotAll] = React.useState(true);
  const set = () => {
    SetNotAll(true);
  };

  const unset = () => {
    SetNotAll(false);
  };

  useEffect(() => {
    console.log('reservationa')
    axios.get(process.env.REACT_APP_DB_HOST + "/jazzbarRead")
    .then(res => {
      const jazzbarList = res.data.data;
      console.log(jazzbarList,'!!!!!!!')
      const jazzbardata = jazzbarList.filter(el => el.id === state.jazzbarId)
    dispatch(setBossJazzBar(jazzbardata[0]));
    })
    .then(
      axios.post(process.env.REACT_APP_DB_HOST + "/reservationRead",{jazzbarId : state.jazzBarId}, {
        headers: {
          authorization: state.token,
        },
        withCredentials: true,
      }) 
      .then(res =>{
        console.log(res.data)
        const list = res.data.data.list;
        dispatch(setBossReservationList(list))
         const token = res.data.data.accessToken;
        dispatch(setToken(token));
      } 
      )
       
      )
      .catch(err => console.log(err))
  },[])

  
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
        {/* <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div> */}
        <div className="content">
          <div className="content-title">예약 관리</div>
          <hr class="hrcss"></hr>
          <ReserHeader set={set} unset={unset} all={All}></ReserHeader>
        </div>
      </div>
    </div>
  );
};

export default BreservationPage;
