import React, {useState} from "react";
import DatePick from "../DatePick";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import ReserTable from './ReserTable'

function ReserByDate () {
    const BossState = useSelector((state) => state.reducer.reservation)
    // const DataPerDate = BossState.filter((el)=>el.date === '') //날짜별 필터 필요
    const sort = BossState.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
    const confirm = sort.filter((el) => el.status ==="승인")
    const denied = sort.filter((el) => el.status ==="거절")
    const pending = sort.filter((el) => el.status ==="대기")
  
    const [selected, setSelect] = useState(BossState)
    const ChangeReserTable = (data) =>{
      setSelect(data)
    }
    return(
        <div>
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
                <th>공연시간</th>
                <th>승인상태</th>
              </tr>
              {selected.map((el)=>{
                return <ReserTable data={el}></ReserTable>
              })}
            </table>
          </div>
        </div>
    )
}

export default ReserByDate