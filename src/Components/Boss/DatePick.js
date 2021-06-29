import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import {connect} from 'react-redux'
import { ChangeDate} from '../redux/new/action'



function DatePick(){
    const week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  const dateGenerate = (today) =>{
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = week[Number(today.getDay())]; // 요일
    let fixedDate =
    year + "년 " + month + "월 " + date + "일 " + "(" + day + ")";
    return fixedDate;
  }

  const [fixedDate1, setFixedDate] = useState(dateGenerate(today));
  const DateChange = (e) =>{
    setFixedDate(dateGenerate(e))
  }

  return(
    <div className="date-box">
    <div className="date">
      <div>{fixedDate1}</div>
    </div>
    <div className="datePicker">
      <DatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd(eee)"
        minDate={new Date()}
        closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
        placeholderText="날짜 변경"
        //  selected={date}	// value
         onChange={(e) => DateChange(e)}	// 날짜를 선택하였을 때 실행될 함수
      />
    </div>
  </div>

  )

}

const mapStateToProps =(state) =>{
  return{
    count : state.ChangeDate
  }
}//count가 위 props로 전달됨.

// // const mapDispatchToProps = (dispatch) =>{
// //   return{
// //     ChangeDate : () =>dispatch(ChangeDate())
// //     //onclickbutton props.changedate() 실행
// //   }
// // }

const mapDispatchToProps = {
  // ChangeDate : ChangeDate
  ChangeDate
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePick);

// export default DatePick