import React, {useState} from "react";
import { useSelector } from 'react-redux';
import './AllShow.css'
import AllShowEntry from './AllShowEntry'

function AllShow () {
    const AllShow = useSelector((state) => state.reducer.BossShowList)
    return (
        <div className ="allShow-box">
            {AllShow.map(el => {
             return <AllShowEntry key={el.id} data={el}></AllShowEntry>
            })}

        </div>
    )
}

export default AllShow;