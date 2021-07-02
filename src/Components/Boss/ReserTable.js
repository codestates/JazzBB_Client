import React from "react";

function ReserTable({ data }) {
  return (
    <tr>
      <td>{data.num}</td>
      <td>{data.name}</td>
      <td>{data.tel}</td>
      <td>{data.psn}</td>
      {data.status === "대기" ? (
        <td>
          {" "}
          <button>승인</button>
          <button>거절</button>
        </td>
      ) : (
        <td> {data.status}</td>
      )}
    </tr>
  );
}

export default ReserTable;
