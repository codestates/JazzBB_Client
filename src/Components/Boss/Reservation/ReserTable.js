import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "../../../dist/css/comm.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { setToken, setBossReservationList } from "../../redux/new/action";


function ReserTable ({data}){
  const dispatch = useDispatch();
  const userstate = useSelector((state) => state.reducer);
 const [status, setStatus] = useState(data.status)
 const today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  if(month < 10){
    month = '0' + month
  }
  var date = today.getDate();
  if(date < 10){
    date = '0'+ date
  }
  var fixedDate =
    year + "-" + month + "-" + date ;


   
  const statusAlert = (e) => {
    let changedStatus = e.target.name;
    console.log(e.target.name)
     console.log(data,'confirmAlert data')

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
                dispatch(setBossReservationList)
                setStatus(changedStatus)
              })
              .then(window.location.reload(true))
              .catch((err) => console.log(err));
          },
        },
        {
          label: "아니요",
        },
      ],
    });
  };

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
      <tr className="black">
        <td>{data.id}</td>
        <td>{data.show.date}</td>
        <td>{start}</td>
         <td>{data.user.username}</td>
        <td>{data.people}</td>
        <td>{data.user.mobile}</td>
        <td>{data.show.currentSeat}</td>
        {fixedDate > data.show.date ? ( <td className='resExpire'><div >공연 종료</div> </td>) : (data.confirm === "pending" ? (
          <td className='resconfirm'>
            <button className='res-ok res' value={data.num} name="confirmed" onClick={(e)=>statusAlert(e)}>승인</button>
            <button className='res-no res' value={data.num} name="denied" onClick={(e)=>statusAlert(e)}>거절</button>
          </td>
        ) : (
          (data.confirm === 'confirmed'? <td className='confirm-ok'> 승인됨</td>
          :(<td className='confirm-no'>거절됨</td>)
          )
          
        ))}
       
      </tr>
      </tbody>
    );

  }
  
}

export default ReserTable;
