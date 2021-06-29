import React, {useState} from "react";
import DatePick from "./DatePick";
import Sidebar from "./Sidebar";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import ReserTable from '../Boss/ReserTable'
// import {connect} from 'react-redux'
// import { ChangeDate} from '../redux/new/action'


const RvManage =() => {
  const dispatch = useDispatch()
  const BossState = useSelector((state) => state.reducer.reservation)
  const confirm = BossState.filter((el) => el.status ==="승인")
  const denied = BossState.filter((el) => el.status ==="거절")
  const pending = BossState.filter((el) => el.status ==="대기")

  const [selected, setSelect] = useState(BossState)
  const ChangeReserTable = (data) =>{
    console.log('clicked', data)
    setSelect(data)
  }


  return ( <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
      <div className="bossHeader"><img src="/img/tokyoJazz.jpg" alt=""/></div>
        <div className="content">
          <div className="content-title">예약 관리</div>
          <hr class="hrcss"></hr>
          <DatePick></DatePick>

          <div className="status-box" > 
            <div className="status-f status" onClick={()=>ChangeReserTable(BossState)}>
              <span className="status-title">신청</span>
              <span className="status-number">{BossState.length}</span>
            </div>

            <div className="status-s status" onClick={()=>ChangeReserTable(confirm)}>
              <span className="status-title">승인 </span>
              <span className="status-number">{confirm.length}</span>
            </div>

            <div className="status-t status" onClick={()=>ChangeReserTable(denied)}>
              <span className="status-title">거절 </span>
              <span className="status-number">{denied.length}</span>
            </div>

            <div className="status-fourth status" onClick={()=>ChangeReserTable(pending)}>
              <span className="status-title">대기 </span>
              <span className="status-number">{pending.length}</span>
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
              {selected.map((el)=>{
                return <ReserTable data={el}></ReserTable>
              })}
            </table>
          </div>
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

export default RvManage