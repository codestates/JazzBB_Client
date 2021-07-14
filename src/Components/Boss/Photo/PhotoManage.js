import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import InputFile from "../ShowManage/InputFile";
import { useSelector, useDispatch } from "react-redux";
import {
  setJazzBarData,
} from "../../redux/new/action";

import axios from "axios";
import "./PhotoManage.css";

const PhotoManage = () => {
  const dispatch = useDispatch;
  const jazzbarId = useSelector((state) => state.reducer.jazzbarId);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + "/jazzbarRead", jazzbarId)
      .then((res) => {
        const list = res.data.data;
        dispatch(setJazzBarData(list));
      });
  }, []);

  const jazzbar = useSelector((state) => state.reducer.jazzbar);

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
            {/* {jazzbar.thumbnail.menu.length !== 0
              ? jazzbar.thumbnail.menu.map((el, index) => {
                  <img className="registered-photo-img" src={el} key={index} />;
                })
              : null}

            {jazzbar.thumbnail.banner.length !== 0
              ? jazzbar.thumbnail.menu.map((el, index) => {
                  <img className="registered-photo-img" src={el} key={index} />;
                })
              : null} */}
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
};

export default PhotoManage;
