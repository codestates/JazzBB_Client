import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import "./ShowManage.css";
// import DatePick from "../DatePick";
import ShowHeader from './ShowHeader'
import axios from "axios";
import { setBossShowList } from "../../redux/new/action";


function BshowPage() {
  const dispatch = useDispatch();
  // const jazzbarId = ""; //재즈바 아이디 가져오기
  const jazzbar_id = useSelector(state => state.reducer.jazzBarId);
 //서버 연결 후, 주석 풀기
  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_DB_HOST + "/showRead", jazzbar_id)
  //     .then((res) => {
  //       const list = res.data.data.list;
  //       dispatch(setBossShowList(list));
  //     });
  // }, []);


  return (
    <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
        {/* <div className="bossHeader">
          {/* <img src="/img/tokyoJazz.jpg" alt="" /> */}
        {/* </div>  */}
        <div className="content">
          <div className="content-title">공연 관리</div>
          <hr class="hrcss"></hr>
          {/* 공연리스트 */}
          <div clssName ="b-show-list">
            <ShowHeader></ShowHeader>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default BshowPage;
