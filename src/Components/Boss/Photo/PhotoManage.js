import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import InputFile from "../ShowManage/InputFile";
import { useSelector, useDispatch } from "react-redux";
import {setBossJazzBar} from "../../redux/new/action";
import axios from "axios";
import "./PhotoManage.css";
import PhotoInput from './PhotoInput'

const PhotoManage = () => {
  const dispatch = useDispatch;
  const state = useSelector((state) => state.reducer);
  const jazzbar = useSelector((state) => state.reducer.jazzbar);
  console.log(jazzbar,'jazzbar')
const [img, setImg] =useState('')

//   useEffect(() => {
//     axios.get(process.env.REACT_APP_DB_HOST + "/jazzbarRead")
//     .then(res => {
//       const jazzbarList = res.data.data;
//       const jazzbardata = jazzbarList.filter(el => el.id === state.jazzbarId)
// dispatch(setBossJazzBar(jazzbardata[0]));
//       });
//   }, []);


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
            {state.menu !== []
              ? state.menu.map((el, index) => {
                  <img className="registered-photo-img" src={el.thumbnail} key={index} alt =""/>;
                })
              : null}

            {/* {jazzbar.thumbnail !== null
             ? 
                  <img className="registered-photo-img" src={jazzbar.thumbnail} alt="" />
              : null} */}
      
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
