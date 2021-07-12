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
        <td className='resconfirm'>
          <button className='res-ok res'>승인</button>
          <button className='res-no res'>거절</button>
        </td>
      ) : (
        (data.confirm === 'confirm'? <td className='confirm-ok'>승인됨</td>
        :(<td className='confirm-no'>거절됨</td>)
        )
        
      )}
    </tr>
  );
}

export default ReserTable;
