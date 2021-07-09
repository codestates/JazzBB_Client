import React, {useEffect} from "react";
import Sidebar from "../Sidebar";
import InputFile from '../ShowManage/InputFile'
// import '../ShowManage/RvManage.css'

const  PhotoManage = ()=> {
  return (
    <div>
      <Sidebar></Sidebar>
    <div className="contentBox">
      <div className="registered-photo">
        <div>등록한 사진</div>
        <img src="/img/tokyoJazz.jpg" alt="" width="250"></img>
        <img src="/img/tokyoJazz.jpg" alt="" width="250"></img>
        <img src="/img/tokyoJazz.jpg" alt="" width="250"></img>
        <img src="/img/tokyoJazz.jpg" alt="" width="250"></img>
      </div>
      <div className="willUploaded-photo">
      <InputFile></InputFile>
      </div>
    </div>
    </div>
  );
}

export default PhotoManage;
