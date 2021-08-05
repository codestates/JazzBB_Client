import React, { useState } from "react";
import ReserTable from "./ReserTable";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "../../../dist/css/comm.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { setToken } from "../../redux/new/action";

function ReserAll() {
  const dispatch = useDispatch();
  const userstate = useSelector((state) => state.reducer);
  const BossState = useSelector((state) => state.reducer.bossReservation);
  const Bsort = BossState.sort((a, b) => {
    let x = a.show.date.toLowerCase();
    let y = b.show.date.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  const Bconfirm = Bsort.filter((el) => el.confirm === "confirm");
  const Bdenied = Bsort.filter((el) => el.confirm === "denied");
  const Bpending = Bsort.filter((el) => el.confirm === "pending");
  const [selected, setSelect] = useState(BossState);
  const ChangeTableByStatus = (status) => {
    const data = BossState.filter((el) => el.confirm === status);
    if (status === "all") {
      setSelect(BossState);
    } else if (data.length === 0) {
      alert("해당 상테의 예약 리스트가 존재하지 않습니다.");
      setSelect([]);
    } else {
      setSelect(data);
    }
  };

  const statusAlert = (e, data) => {
    let changedStatus = e.target.name;
    console.log(e.target.name)


    confirmAlert({
      title: `${changedStatus === "confirmed" ? "승인" : "거절"} 하시겠습니까?`,
      // message: ,
      buttons: [
        {
          label: "예",
          onClick: (e) => {
            axios
              .post(
                process.env.REACT_APP_DB_HOST + "/reservationUpdate",
                {
                  id: data.id,
                  confirm: changedStatus,
                  people : data.people,
                  showId : data.show.id
                }
                ,
               { headers: {
                  authorization: userstate.token,
                },
                withCredentials: true,}
              )
              .then((res) => {
                const token = res.data.data.accessToken;
                dispatch(setToken(token));
              })
              .then(window.location.reload())
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
      <div className="status-box">
        <div //전체 신청
          className="status-f status"
          onClick={() => ChangeTableByStatus("all")}
        >
          <span className="status-title">총 신청</span>
          <span className="status-number">{Bsort.length}</span>
        </div>

        <div
          className="status-s status"
          onClick={() => ChangeTableByStatus("confirm")}
        >
          <span className="status-title">승인 </span>
          <span className="status-number">{Bconfirm.length}</span>
        </div>

        <div
          className="status-t status"
          onClick={() => ChangeTableByStatus("denied")}
        >
          <span className="status-title">거절 </span>
          <span className="status-number">{Bdenied.length}</span>
        </div>

        <div
          className="status-fourth status"
          onClick={() => ChangeTableByStatus("pending")}
        >
          <span className="status-title pending">대기 </span>
          <span className="status-number-pending-blink">{Bpending.length}</span>
        </div>
      </div>

      <div className="rv-info">
        <div className="rv-info-contents">예약정보</div>
        <table id="customers">
        <tbody>
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
          </tbody>

          {selected.length === 0
            ? BossState.map((el) => (
                <ReserTable key={el.id}data={el} confirmAlert={statusAlert}></ReserTable>
              ))
            : selected.map((el) => (
                <ReserTable key={el.id} data={el} confirmAlert={statusAlert}></ReserTable>
              ))}
        </table>
      </div>
    </div>
  );
}

export default ReserAll;
