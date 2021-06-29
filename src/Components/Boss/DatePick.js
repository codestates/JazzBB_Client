import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import {setBossDate} from '../redux/new/action'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
// import { connect } from "react-redux";


function DatePick() {
  const dispatch = useDispatch()
const BossState = useSelector((state) => state.reducer.boss)
const Boss_Date = BossState.date

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  const dateGenerate = (today) => {
    let year = today.getFullYear(); 
    let month = today.getMonth() + 1; 
    let date = today.getDate(); 
    let day = week[Number(today.getDay())]; 
    let fixedDate =
      year + "년 " + month + "월 " + date + "일 " + "(" + day + ")";
    return fixedDate;
  };
  const date = dateGenerate(Boss_Date)

  
  return (
    <div className="date-box">
      <div className="date">
        <div>{date}</div>
      </div>
      <div className="datePicker">
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd(eee)"
          minDate={new Date()}
          closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          placeholderText="날짜 변경"
          //  selected={date}	// value
          onChange={(e) => dispatch(setBossDate(e))} // 날짜를 선택하였을 때 실행될 함수
        />
      </div>
    </div>
  );
}
export default DatePick;

// const mapStateToProps =(state) =>{
//   return{
//     clickedDate : state.boss
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     setBossDate : () =>dispatch(setBossDate())
//     //onclickbutton props.changedate() 실행
//   }
// }

// const mapDispatchToProps = {
//   // ChangeDate : ChangeDate
//   ChangeDate
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DatePick);

