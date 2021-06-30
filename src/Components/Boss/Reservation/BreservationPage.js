import React, {useState} from "react";
import DatePick from "../DatePick";
import Sidebar from "../Sidebar";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import ReserTable from './ReserTable'
import ReserHeader from './ReserHeader'
// import {connect} from 'react-redux'
// import { ChangeDate} from '../redux/new/action'


const BreservationPage =() => {

  return ( <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
      <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div>
        <div className="content">
          <div className="content-title">예약 관리</div>
          <hr class="hrcss"></hr>
          <ReserHeader></ReserHeader>
        </div>
      </div>
    </div>
  );
}
// const mapStateToProps =(state) =>{
//   return{
//     count : state.함수명.count
//   }
// }//count가 위 props로 전달됨.

// // const mapDispatchToProps = (dispatch) =>{
// //   return{
// //     ChangeDate : () =>dispatch(ChangeDate())
// //     //onclickbutton props.changedate() 실행
// //   }
// // }

// const mapDispatchToProps = {
//   // ChangeDate : ChangeDate
//   ChangeDate
// }
// export default connect(mapStateToProps, mapDispatchToProps)(RvManage);

export default BreservationPage