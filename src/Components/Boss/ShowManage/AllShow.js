import React, {useEffect} from "react";
import "./AllShow.css";
import AllShowEntry from "./AllShowEntry";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {setBossShowList} from '../../redux/new/action'


function AllShow() {
  const dispatch = useDispatch();
  const AllShow = useSelector((state) => state.reducer.BossShowList);
  const jazzbarId = useSelector((state) => state.reducer.jazzBarId);
useEffect(()=>{
  axios
  .post(process.env.REACT_APP_DB_HOST + "/showRead", jazzbarId)
  .then(res => {
    let showList = res.data.data
    showList.map(el => el.player =JSON.parse(el.player))
    dispatch(setBossShowList(showList))
  })
},[])
  return (
    <div className="allShow-box">
      {AllShow.map((el) => {
        return <AllShowEntry key={el.id} data={el}></AllShowEntry>;
      })}
    </div>
  );
}

export default AllShow;
