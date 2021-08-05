import React, { Component, useState } from "react";
import Sidebar from "./Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useTable } from "react-table";
import { useMemo } from "react";

function BreservationPage() {
  const data = useMemo(
    () => [
      {
        objectId: "01",
        id: "01",
        name: "서지민",
        tel: "010-000-0000",
        psn: "3",
        time: "17:00",
        confirm: "승인 필요"
      },
      {
        objectId: "4fOA1olTnP",
        id: "02",
        name: "서지민",
        tel: "010-000-0000",
        psn: "3",
        time: "17:00",
        confirm: "승인됨"
      },
      {
        objectId: "Khkkd3cTWW",
        id: "03",
        name: "서지민",
        tel: "010-000-0000",
        psn: "3",
        time: "17:00",
        confirm: "거절"
      }])
      const columns = useMemo(
        () => [
          {
            Header: "번호",
            accessor: "id"
          },
          {
            Header: "이름",
            accessor: "name"
          },
          {
            Header: "연락처",
            accessor: "tel"
          },
          {
            Header: "인원",
            accessor: "psn"
          },
          {
            Header: "시간",
            accessor: "time"
          },
          {
            Header: "승인상태",
            accessor: "confirm"
          },
          {
            Header: "",
            accessor: "accept"
          },
          {
            Header: "",
            accessor: "deny"
          }
        ],
        []
      );
     
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({ columns, data });
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = week[Number(today.getDay())]; // 요일

  const fixedDate =
    year + "년 " + month + "월 " + date + "일 " + "(" + day + ")";
  const [fixedDate1, setDate] = useState(fixedDate);

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="outer-box">
        <div className="bossHeader">재즈바 사진</div>
        <div className="content">
          <div className="content-title">예약관리</div>

          <hr className="hrcss"></hr>

          <div className="date-box">
            <div className="date">
              <div>{fixedDate1}</div>
            </div>
            <div className="datePicker">
            <DatePicker
              locale={ko} 
              dateFormat = "yyyy.MM.dd(eee)"
              minDate={new Date()} 
              closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
              placeholderText="날짜 변경" 
              //  selected={checkInDate}	// value
              //  onChange={(date) => setCheckInDate(date)}	// 날짜를 선택하였을 때 실행될 함수
            />
            </div>
          </div>

          <div className="status-box">
            <div className="status-fst">
              1{/* <span className="status-title">총 신청</span> */}
              {/* <span className="status-number">52</span> */}
              <div className="status-snd">
                2{/* <span className="status-title">승인</span> */}
                {/* <span className="status-number">52</span> */}
              </div>
              <div className="status-trd">
                3{/* <span className="status-title">거절</span> */}
                {/* <span className="status-number">52</span> */}
              </div>
              <div className="status-frt">
                4{/* <span className="status-title">거절</span> */}
                {/* <span className="status-number">52</span> */}
              </div>
            </div>
          </div>

          <div className="rv-info">
            <div className="rv-info-contents">예약정보 table</div>
            <table id="customers">
  <tr>
    <th>번호</th>
    <th>이름</th>
    <th>Country</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  
</table>
            {/* <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreservationPage;
