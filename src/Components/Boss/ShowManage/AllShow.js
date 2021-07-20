import React from "react";
import "./AllShow.css";
import AllShowEntry from "./AllShowEntry";
import {useSelector} from 'react-redux'

function AllShow() {
  const AllShow = useSelector((state) => state.reducer.BossShowList);

  return (
    <div className="allShow-box">
      {AllShow.map((el) => {
        return <AllShowEntry key={el.id} data={el}></AllShowEntry>;
      })}
    </div>
  );
}

export default AllShow;
