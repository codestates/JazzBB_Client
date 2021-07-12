import React, { useState, useEffect } from "react";
import DatePick from "../DatePick";
import { useSelector, useDispatch } from "react-redux";
import ReserTable from "./ReserTable";
import axios from "axios";
import "../../../dist/css/comm.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function ReserByDate({ AllPage, setAll, unsetAll }) {
  //전체예약
  const BossState = useSelector((state) => state.reducer.reservation);
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

  //화면에 뿌려줄
  const [OriginList, setOriginList] = useState(BossState);
  const [OriginFilteredList, setFilteredList] = useState([{ cf: Bconfirm }, { dn: Bdenied }, { pd: Bpending }]);

  //전체예약리스트를 클릭한 경우
  const ShowFullList = () => {
    setOriginList([...BossState]);
    setFilteredList([{ cf: Bconfirm }, { dn: Bdenied }, { pd: Bpending }]);
  };

  //DatePicker로 선택한 날짜.
  const [date, setDate] = useState("2017-01-01");
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
  const [selected, setSelect] = useState(OriginList);

  const ChangeDate = (bydate) => {
    setDate(bydate);
  };
  console.log(DataPerDate,' outer -- DataPerDate@@@@');
  //날짜별 예약 리스트를 클릭한 경우.
  function ShowListByDate() {
    console.log("날짜별예약관리이이이");
    console.log(date);
    console.log(DataPerDate,' 1. DataPerDate@@@@');
    setOriginList([...DataPerDate]);
    setSelect([...DataPerDate]);

    setFilteredList([{ cf: confirm }, { dn: denied }, { pd: pending }]);
    console.log(OriginList,'2. OriginListsfsfsdf')
    console.log(selected,'3. selected-------')
    console.log(OriginFilteredList,'4. OriginFilteredList')
  };

  // useEffect(() => {
  //   console.log("user 값이 설정됨");
  //   BossListByStauts(DataPerDate);
  //   return () => {
  //     console.log("user 가 바뀌기 전..");
  //   };
  // }, [date]);

  //선택된 날짜의 쇼 리스트
  //To:DO -------전체 쇼리스트 가져오고 -> res.data.showInfo.dataValues.date/time
  let showList = useSelector((state) => state.reducer.BossShowList);
  let showListBySelectedDate = showList.filter((el) => el.date === date);


  // status박스 클릭 시, 테이블 변경되는 로직.
  const ChangeTableByStatus = (status) => {
    const data = OriginList.filter((el) => el.confirm === status);
    if (status === "all") {
      setSelect(OriginList);
    } else if (data.length === 0) {
      alert("해당 상테의 예약 리스트가 존재하지 않습니다.");
      setSelect([]);
    } else {
      setSelect(data);
    }
    console.log(data,'datadd!!!dfsfsdfsdf');
    console.log(selected,'selected!@!@!@sdfsdfsdf');
  };


  const [statusList, setStatusList] = useState([]);
  let list = [];
  const BossListByStauts = (DataPerDate) => {
    // // console.log("BossListByStauts");
    // // console.log(DataPerDate, "1 DatePerDate");
    // const statuss = ["confirm", "denied", "pending"];
    // statuss.map((status) => {
    //   let yap = DataPerDate.filter((el) => el.confirm === status);
    //   // console.log(yap, "yap");
    //   // setStatusList(Object.assign({}, DataPerDate, { [status]: yap }));
    //   setStatusList({ ...statusList, all: DataPerDate, [status]: yap });
    // });
    // // console.log(statusList, "listttttt");
  };

  const [status, setStatus] = useState([]);
  let defaultData = 0;

  // const length = [];

  // const setLengh = () => {
  //   const status = ["confirm", "denied", "pending"];
  //   AllPage !== false ? (defaultData = Bsort) : (defaultData = sort);
  //   for (let i = 0; i < status.length; i++) {
  //     const key = status[i];
  //     const data = defaultData.filter((el) => el.confirm === key);
  //     length.push(data.length);
  //     // console.log(length);
  //   }
  // };
  const ChangeReserTable = (defaultData, status) => {
    const data = defaultData.filter((el) => el.confirm === status);
    if (status === "all") {
      setSelect(defaultData);
    } else if (data.length === 0) {
      alert("해당 상테의 예약 리스트가 존재하지 않습니다.");
    } else {
      setSelect(data);
    }
    // console.log(data,'data');
    // console.log(selected,'selected');
  };

  const handleListByTime = (e) => {
    const filteredByTime = DataPerDate.filter(
      (el) => el.show.time === e.target.value
    );
    filteredByTime.map((el) => setSelect(filteredByTime));
    // console.log(e.target.value);
  };

  const alert = (e) => {
    // let id = e.target.value;
    // let changedStatus = e.target.name;
    // confirmAlert({
    //   title: `${changedStatus === "confirmed" ? "승인" : "거절"} 하시겠습니까?`,
    //   // message: ,
    //   buttons: [
    //     {
    //       label: "예",
    //       onClick: (e) => {
    //         axios
    //           .get(process.env.REACT_APP_DB_HOST + "/reviewUpdate", {
    //             id: id,
    //             confirm: changedStatus,
    //           })
    //           .then((res) => (window.location.href = "/boss/reservation"))
    //           .catch((err) => console.log(err));
    //       },
    //     },
    //     {
    //       label: "아니요",
    //     },
    //   ],
    // });
  };

  return (
    <div>
      <div>
        <a>
          <span
            onClick={() => {
              setAll();
              ShowFullList();
            }}
          >
            전체 예약 관리
          </span>
        </a>
      </div>
      <div>
        <a>
          <span onClick={()=>{ShowListByDate();
          unsetAll()}}>날짜별 예약 관리</span>
        </a>
      </div>

      {AllPage !== false ? null : (
        <div>
          <DatePick ChangeDate={ChangeDate} ShowListByDate={ShowListByDate}></DatePick>
          <select name="pets" id="pet-select" onChange={handleListByTime}>
            <option value="">--공연 시간별 예약리스트--</option>
            <option value="">전체</option>
            {showListBySelectedDate.length !== 0
              ? showListBySelectedDate.map((el) => (
                  <option value={el.time}>{el.time}</option>
                ))
              : null}
          </select>
          <button>검색</button>
        </div>
      )}

      <div className="status-box">
        <div //전체 신청
          className="status-f status"
          onClick={() =>
            AllPage === false
              ? ChangeReserTable(sort, "all")
              : ChangeTableByStatus("all")
          }
        >
          <span className="status-title">신청</span>
          <span className="status-number">
            {AllPage === false ? DataPerDate.length : OriginList.length}
          </span>
        </div>

        <div
          className="status-s status"
          onClick={() =>
            AllPage === false
              ? ChangeReserTable(sort, "confirm")
              : ChangeTableByStatus("confirm")
          }
        >
          <span className="status-title">승인 </span>
          <span className="status-number">
            {AllPage === false
              ? confirm.length
              : OriginFilteredList[0].cf.length}
          </span>
        </div>

        <div
          className="status-t status"
          onClick={() =>
            AllPage === false
              ? ChangeReserTable(sort, "denied")
              : ChangeTableByStatus("denied")
          }
        >
          <span className="status-title">거절 </span>
          <span className="status-number">
            {AllPage === false
              ? denied.length
              : OriginFilteredList[1].dn.length}
          </span>
        </div>

        <div
          className="status-fourth status"
          onClick={() =>
            AllPage === false
              ? ChangeReserTable(sort, "pending")
              : ChangeTableByStatus("pending")
          }
        >
          <span className="status-title pending">대기 </span>
          <span className="status-number-pending-blink">
            {AllPage === false
              ? pending.length
              : OriginFilteredList[2].pd.length}
          </span>
        </div>
      </div>

      <div className="rv-info">
        <div className="rv-info-contents">예약정보</div>
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
          {/* {selected.length === 0
            ? AllPage === true
              ? BossState.map((el) => ( //ToDO : currentSeat 정보 추가하기
                  <ReserTable data={el} alert={alert}></ReserTable>
                ))
              : DataPerDate.map((el) => (
                  <ReserTable data={el} alert={alert}></ReserTable>
                ))
            : selected.map((el) => (
                <ReserTable data={el} alert={alert}></ReserTable>
              ))} */}
              {/* {OriginList.length ===0 ? <ReserTable data={[""]} alert={alert}></ReserTable> :
              selected.length ===0 ? (OriginList.map((el) => (
                <ReserTable data={el} alert={alert}></ReserTable> ))) :selected.map((el) => (
                  <ReserTable data={el} alert={alert}></ReserTable> ))
              } */}
         
        </table>
      </div>
    </div>
  );
}

export default ReserByDate;
