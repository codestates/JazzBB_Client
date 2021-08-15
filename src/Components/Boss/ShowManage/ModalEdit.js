import InputFile from "./InputFile";
// import Button from "@material-ui/core/Button";
// import SaveIcon from "@material-ui/icons/Save";
import ModalEditInfo from "./ModalInfoEdit";
// import { RiDeleteBin5Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./ShowManage.css";

import react, { useState } from "react";


function ModalEdit() {
  const location = useLocation();
  const { info } = location.state;
  const [imgFile, setImgFile] = useState([]); //이미지파일



  return (
    <div>
      <Sidebar></Sidebar>
      <div className="modify-show-box">
        <div className="dummydiv"></div>

        <div className="modify-top-box">
          <div className="modify-show-innerbox">
            <div className="modify-show-box_photo">
              <div className="modify-show-photo">
                <InputFile setImgFile={setImgFile} data = {info}></InputFile>
              </div>
            </div>
          </div>

          <div className="modify-show-infobox">
            <div className="modify-show-box_input">
              <ModalEditInfo data={info} imgFile={imgFile}></ModalEditInfo>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default ModalEdit;
