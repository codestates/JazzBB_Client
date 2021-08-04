import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { setBossDate } from "../redux/new/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

function DatePick({ChangeDate}) {
  const dispatch = useDispatch();
  const BossState = useSelector((state) => state.reducer.boss);
  const Boss_Date = BossState.date;
  // const week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  const dateGenerate = () => {
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    if(month < 10){
      month = '0' + month
    }
    var date = today.getDate();
    if(date < 10){
      date = '0'+ date
    }
    // var day = week[Number(today.getDay())];
    var fixedDate =
      year + "-" + month + "-" + date ;
      // year + "-" + month + "- " + date + "- " + "(" + day + ")";
    return fixedDate;
  };
  let date = dateGenerate(Boss_Date);
  console.log(date,'date')
  ChangeDate(date)

  const setDate = (e) =>{
     console.log(e.target.value)
  ChangeDate(date)

  }


  return (
    <div className="date-box">
      <div className="date">
        <div>
          <span>{date}</span> 
        </div>
      </div>
      <div className="datePicker">
        <input type="date" min="2021-08-01"  onChange={setDate}></input>
         {/* <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd(eee)"
          closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          placeholderText="날짜 변경"
          //  selected={date}	// value
          // placeholderText={date}
          // onChange={(e) => {
          //   // dispatch(setBossDate(e))
          //   setDate()
          //  }} // 날짜를 선택하였을 때 실행될 함수
          onChange={setDate}
        /> */}
      </div>
    </div>
  );
}
export default DatePick;


