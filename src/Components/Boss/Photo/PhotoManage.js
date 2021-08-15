import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
// import InputFile from "../ShowManage/InputFile";
import { useSelector } from "react-redux";
import {setBossMenu} from "../../redux/new/action";
import axios from "axios";
import "./PhotoManage.css";
import PhotoInput from './PhotoInput'

function PhotoManage(){
  const state = useSelector((state) => state.reducer);
const [img, setImg] =useState('')
const [menu, setMenu] = useState()
console.log(menu)

useEffect(()=>{
  axios.post( process.env.REACT_APP_DB_HOST + "/menuRead", {jazzbarId : state.jazzBarId})
  .then(res => {
    const list = res.data.data.data[0].thumbnail;
    if(list !== undefined){
      const arr = list.split(',')
      setMenu(arr)
    }
  })
},[])
 
console.log(menu)
  return (
    <div className="photocontentbody">
      <Sidebar></Sidebar>

      <div className="sidebarspace"></div>
    <div className="contentBox">
      <div className="registered-photo">
        <div className="registered-photo-header">
          <div className="registered-photo-label">등록한 사진</div>
        </div>

        <div className="registered-photo-body">
            {menu
              ? menu.map((el) => {
                return  <img className="registered-photo-img" src={el}  alt =""/>;
                })
              : <div> 등록된 사진이 없습니다.</div>}
           
      
        </div>
        
        <div className="register-new-photo">
          <div className="register-header">
            <div className="register-header-label">신규 사진 등록</div>
          </div>
          <div className="register-inputfile">
              <PhotoInput setImgFile={setImg}></PhotoInput>
          </div>
          
        </div>

        </div>
      </div>
    </div>
  );
};

export default PhotoManage;
