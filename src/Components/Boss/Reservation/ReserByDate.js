import React, { useState, useEffect } from "react";
import DatePick from "../DatePick";
import { useSelector, useDispatch } from "react-redux";
import ReserTable from "./ReserTable";
import axios from "axios";
import "../../../dist/css/comm.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function ReserByDate() {
  const userstate = useSelector((state) => state.reducer.user);
  const BossState = useSelector((state) => state.reducer.bossReservation);
  const [date, setDate] = useState("2021-08-01");
  let DataPerDate = BossState.filter((el) => el.show.date === date);
  const sort = DataPerDate.sort((a, b) => {
    let x = a.show.time.toLowerCase();
    let y = b.show.time.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  const confirm = sort.filter((el) => el.confirm === "confirm");
  const denied = sort.filter((el) => el.confirm === "denied");
  const pending = sort.filter((el) => el.confirm === "pending");
  const [selected, setSelect] = useState(DataPerDate);

  const ChangeDate = (e) => {
    setDate(e.target.value);
  };

  let showList = useSelector((state) => state.reducer.BossShowList);
  let showListBySelectedDate = showList.filter((el) => el.date === date);

  // status박스 클릭 시, 테이블 변경되는 로직.
  const ChangeTableByStatus = (status) => {
    const data = DataPerDate.filter((el) => el.confirm === status);
    if (status === "all") {
      setSelect(DataPerDate);
      console.log(selected);
    } else if (data.length === 0) {
      alert("해당 상테의 예약 리스트가 존재하지 않습니다.");
      setSelect([]);
    } else {
      setSelect(data);
    }
  };

  const handleListByTime = (e) => {
    if (e.target.value === "all") {
      setSelect(DataPerDate);
    } else {
      const filteredByTime = DataPerDate.filter(
        (el) => el.show.time === e.target.value
      );
      filteredByTime.map((el) => setSelect(filteredByTime));
    }
  };

  const statusAlert = (e) => {
    let id = e.target.value;
    let changedStatus = e.target.name;
    confirmAlert({
      title: `${changedStatus === "confirmed" ? "승인" : "거절"} 하시겠습니까?`,
      // message: ,
      buttons: [
        {
          label: "예",
          onClick: (e) => {
            axios
              .get(
                process.env.REACT_APP_DB_HOST + "/reviewUpdate",
                {
                  authorization: userstate.token,
                },
                {
                  id: id,
                  confirm: changedStatus,
                }
              )
              .then((res) => (window.location.href = "/boss/reservation"))
              .catch((err) => console.log(err));
          },
        },
        {
          label: "아니요",
        },
      ],
    });
  };

  return (
    <div>
      <div className="date-box">
      <div className="date">
        <div>
          <span>{date}</span> 
        </div>
      </div>
      <div className="datePicker">
        <input type="date" min="2021-08-01"  onChange={ChangeDate}></input>
      </div>
    </div>

      <div className="status-box">
        <div //전체 신청
          className="status-f status"
          onClick={() => ChangeTableByStatus("all")}
        >
          <span className="status-title">총 신청</span>
          <span className="status-number">{sort.length}</span>
        </div>

        <div
          className="status-s status"
          onClick={() => ChangeTableByStatus("confirm")}
        >
          <span className="status-title">승인 </span>
          <span className="status-number">{confirm.length}</span>
        </div>

        <div
          className="status-t status"
          onClick={() => ChangeTableByStatus("denied")}
        >
          <span className="status-title">거절 </span>
          <span className="status-number">{denied.length}</span>
        </div>

        <div
          className="status-fourth status"
          onClick={() => ChangeTableByStatus("pending")}
        >
          <span className="status-title pending">대기 </span>
          <span className="status-number-pending-blink">{pending.length}</span>
        </div>
      </div>

      <div className="rv-info">
        <div className="rv-info-contents">예약정보</div>
        <select name="pets" id="pet-select" onChange={handleListByTime}>
          <option value="">--공연 시간별 예약리스트--</option>
          <option value="all">전체 시간</option>
          {showListBySelectedDate.length !== 0
            ? showListBySelectedDate.map((el) => (
                <option value={el.time}>{el.time}</option>
              ))
            : null}
        </select>
        <table id="customers">
          <tr>
            <th>예약 번호</th>
            <th>공연날짜</th>
            <th>공연시간</th>
            <th>이름</th>
            <th>인원</th>
            <th>연락처</th>
            <th>남은 좌석</th>
            <th>승인상태</th>
          </tr>
          {selected.length === 0
            ? sort.map((el) => (
                <ReserTable data={el} confirmAlert={statusAlert}></ReserTable>
              ))
            : selected.map((el) => (
                <ReserTable data={el} confirmAlert={statusAlert}></ReserTable>
              ))}
        </table>
      </div>
    </div>
  );
}

export default ReserByDate;
