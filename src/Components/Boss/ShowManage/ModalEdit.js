import InputFile from "./InputFile";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ModalEditInfo from "./ModalInfoEdit";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom";
import Sidebar from '../Sidebar'
import './ShowManage.css'


import axios from "axios";

//showUpdate 수정 필요.
//checkbox default값 수정 필요
//thumbnail default값 수정 필요

function ModalEdit() {
  const location = useLocation()
  const { info } = location.state
  console.log(info,'info')
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);

  const updateShowHandler = () => {
      axios.post(process.env.REACT_APP_DB_HOST + "/showUpdate", {
      }).then(res => {
    console.log("updateShowHandler");
    //rerender 하기

      })
  };
  const deleteShowHandler = () => {
    axios.post(process.env.REACT_APP_DB_HOST + "/showDelete", {
      jazzbar_id: info.jazzbar_id, id : info.id 
    }).then(res => {
    console.log("deleteShowHandler success");
    });
  };

 
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="modify-show-box">

        <div className="dummydiv"></div>

        <div className="modify-top-box">

              <div className="modify-show-innerbox">
                <div className="modify-show-box_photo">
                  <div className="modify-show-photo">
                    <InputFile></InputFile>
                  </div>
                </div>
               </div>

              <div className="modify-show-infobox">
                <div className="modify-show-box_input">
                  <ModalEditInfo data={info}></ModalEditInfo>
                  {/* <AddShowInput data={info}></AddShowInput> */}
                </div>

                {/* <div className="modify-show-box_content">
                  <div className="modify-show-description">
                  <textarea rows="13" cols="27" ></textarea>
                  </div>
                </div> */}
              
              </div>
                
         </div>

      </div>

        <div className="modify-bottom-box">
          <div className="modify-delete-btn" onClick={deleteShowHandler}>
            <Button variant="contained" color="primary" size="large" onClick={deleteShowHandler} startIcon={<RiDeleteBin5Line />}>삭제</Button>
          </div>
          <div className="modify-save-btn" onClick={updateShowHandler}>
            <Button variant="contained" color="primary" size="large" onClick={updateShowHandler} startIcon={<SaveIcon />}>저장</Button>
          </div>
        </div>

    </div>
  );
}

export default ModalEdit;
