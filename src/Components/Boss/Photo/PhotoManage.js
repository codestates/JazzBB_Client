import React, {useEffect} from "react";
import Sidebar from "../Sidebar";
import InputFile from '../ShowManage/InputFile'
import './PhotoManage.css'

const  PhotoManage = ()=> {
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
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
          <img className="registered-photo-img" src="/img/tokyoJazz.jpg" />
        </div>
        
        <div className="register-new-photo">
          <div className="register-header">
            <div className="register-header-label">신규 사진 등록</div>
          </div>
          <div className="register-inputfile">
              <InputFile></InputFile>
          </div>
          
        </div>
        





      </div>
     
    </div>
    </div>
  );
}

export default PhotoManage;
