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
   
  }
  else{
    const [start] = data.show.time.split('-')
    return (
      <tbody>
      <tr>
        <td>{data.id}</td>
        <td>{data.show.date}</td>
        <td>{start}</td>
         <td>{data.user.username}</td>
        <td>{data.people}</td>
        <td>{data.user.mobile}</td>
        <td>{data.show.currentSeat}</td>
        {data.confirm === "pending" ? (
          <td className='resconfirm'>
            <button className='res-ok res' value={data.num} name="confirmed" onClick={(e)=>confirmAlert(e, data)}>승인</button>
            <button className='res-no res' value={data.num} name="denied" onClick={(e)=>confirmAlert(e, data)}>거절</button>
          </td>
        ) : (
          (data.confirm === 'confirmed'? <td className='confirm-ok'> 승인됨</td>
          :(<td className='confirm-no'>거절됨</td>)
          )
          
        )}
      </tr>
      </tbody>
    );

  }
  
}

export default ReserTable;
