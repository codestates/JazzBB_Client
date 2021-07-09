import React from "react";

function ReserTable({ data }) {
  const time = data.show.time.substring(0,5)
  return (
    <tr>
      <td>{data.num}</td>
      <td>{data.name}</td>
      <td>{data.mobile}</td>
      <td>{data.people}</td>
      <td>{data.show.date}</td>
      <td>{time}</td>
      {data.confirm === "pending" ? (
        <td>
          <button>승인</button>
          <button>거절</button>
        </td>
      ) : (
        (data.confirm === 'confirm'? <td> 승인</td>
        :(<td>거절</td>)
        )
        
      )}
    </tr>
  );
}

export default ReserTable;
