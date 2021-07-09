import React, {useState} from "react";
import DatePick from "../DatePick";
import { useSelector } from 'react-redux';
import ReserTable from './ReserTable'
import "../../../dist/css/comm.css"

function ReserByDate ({AllPage}) {
   //DatePicker로 선택하 날짜.
   const [date, setDate] = useState('2017-01-01')
   const ChangeDate = (bydate) => {
     setDate(bydate)
   }
   
   // 전체 예약 리스트
    const BossState = useSelector((state) => state.reducer.reservation)
    const Bsort = BossState.sort((a, b) => a.date - b.date);
    const Bconfirm = Bsort.filter((el) => el.status ==="승인")
    const Bdenied = Bsort.filter((el) => el.status ==="거절")
    const Bpending = Bsort.filter((el) => el.status ==="대기")
    //선택된 날짜 예약 리스트
    const DataPerDate = BossState.filter((el)=>el.date === date) //날짜별 필터 필요
    const sort = DataPerDate.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
    const confirm = sort.filter((el) => el.status ==="승인")
    const denied = sort.filter((el) => el.status ==="거절")
    const pending = sort.filter((el) => el.status ==="대기")
  
    const [selected, setSelect] = useState(DataPerDate) //승인 상태 클릭했을 때 나오는 예약 리스트 데이터
    const ChangeReserTable = (data) =>{
      setSelect(data) 
    }

   
    return(
        <div>
          {AllPage !== undefined ? null : <DatePick ChangeDate={ChangeDate}></DatePick> }

          <div className="status-box" > 
            <div className="status-f status" onClick={() =>AllPage === undefined ? ChangeReserTable(sort) : ChangeReserTable(Bsort)}>
              <span className="status-title">신청</span>
              <span className="status-number">{AllPage === undefined ? DataPerDate.length : BossState.length}</span>
            </div>

            <div className="status-s status" onClick={() =>AllPage === undefined ? ChangeReserTable(confirm) : ChangeReserTable(Bconfirm)}>
              <span className="status-title">승인 </span>
              <span className="status-number">{AllPage === undefined ? confirm.length : Bconfirm.length}</span>
            </div>

            <div className="status-t status" onClick={()=>AllPage === undefined ? ChangeReserTable(denied) : ChangeReserTable(Bdenied)}>
              <span className="status-title">거절 </span>
              <span className="status-number">{AllPage === undefined ? denied.length : Bdenied.length}</span>
            </div>

            <div className="status-fourth status" onClick={()=>AllPage === undefined ? ChangeReserTable(pending) : ChangeReserTable(Bpending)}>
              <span className="status-title pending">대기 </span>
              <span className="status-number">{AllPage === undefined ? pending.length : Bpending.length}</span>
            </div>
          </div>

          <div className="rv-info">
            <div className="rv-info-contents">예약정보</div>
            <table id="customers">
              <tr>
                <th>예약 번호</th>
                <th>이름</th>
                <th>연락처</th>
                <th>인원</th>
                <th>공연날짜</th>
                <th>공연시간</th>
                <th>승인상태</th>
              </tr>
              {selected.length===0?(
                AllPage === true ?  BossState.map((el)=> <ReserTable data={el}></ReserTable> ) :  DataPerDate.map((el)=> <ReserTable data={el}></ReserTable> )
               ) : 
                selected.map(el =><ReserTable data={el}></ReserTable> )
              }
            </table>
          </div>
        </div>
    )
}

export default ReserByDate