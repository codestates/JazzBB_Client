import React from "react";

function ReserTable({ data, confirmAlert }) {
  if(data.length === 0){
    return (
      <tr>
      <td>""</td>
      <td>""</td>
      <td></td>
       <td>""</td>
      <td>""</td>
      <td>""</td>
      <td>""</td>
    </tr>

    )
   
  }else{
    let time = data.show.time.substring(0,5)
    
    return (
      <tr>
        <td>{data.num}</td>
        <td>{data.show.date}</td>
        <td>{time}</td>
         <td>{data.name}</td>
        <td>{data.people}</td>
        <td>{data.mobile}</td>
        <td>{data.show.currentSeat}</td>
        {data.confirm === "pending" ? (
          <td className='resconfirm'>
            <button className='res-ok res' value={data.num} name="confirmed" onClick={confirmAlert}>승인</button>
            <button className='res-no res' value={data.num} name="denied" onClick={confirmAlert}>거절</button>
          </td>
        ) : (
          (data.confirm === 'confirm'? <td className='confirm-ok'> 승인됨</td>
          :(<td className='confirm-no'>거절됨</td>)
          )
          
        )}
      </tr>
    );

  }
  
}

export default ReserTable;
