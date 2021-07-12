import React from "react";

function ReserTable({ data, alert }) {
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
      {/* {data.confirm === "pending" ? (
        <td>
          <button  name="confirmed" onClick={alert}>승인</button>
          <button  name="denied" onClick={alert}>거절</button>
        </td>
      ) : (
        (data.confirm === 'confirm'? <td> 승인</td>
        :(<td>거절</td>)
        )
        
      )} */}
    </tr>

    )
   

  }else{
  //   let time ;
  //   if(data.show.time !== undefined){
  //  time = data.show.time.substring(0,5)
  //   }else{
  //     time = "00:00";
  //   }
    return (
      <tr>
        <td>{data.num}</td>
        <td>{data.show.date}</td>
        {/* <td>{time}</td> */}
         <td>{data.name}</td>
        <td>{data.people}</td>
        <td>{data.mobile}</td>
        <td>{data.show.currentSeat}</td>
        {data.confirm === "pending" ? (
          <td>
            <button value={data.num} name="confirmed" onClick={alert}>승인</button>
            <button value={data.num} name="denied" onClick={alert}>거절</button>
          </td>
        ) : (
          (data.confirm === 'confirm'? <td> 승인</td>
          :(<td>거절</td>)
          )
          
        )}
      </tr>
    );

  }
  
}

export default ReserTable;
