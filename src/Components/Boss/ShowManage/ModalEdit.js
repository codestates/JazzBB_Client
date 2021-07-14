import InputFile from "./InputFile";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ModalEditInfo from "./ModalInfoEdit";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

//showUpdate 수정 필요.
//checkbox default값 수정 필요
//thumbnail default값 수정 필요

function ModalEdit({ info }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);

  const updateShowHandler = () => {
      axios.post(process.env.REACT_APP_DB_HOST + "/showUpdate",{
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
      <div className="show-box">
        <div className="top-box">
          <div className="show-innerbox modalinnerbox">
            <div className="show-box_photo">
              <div className="show-photo">
                <InputFile></InputFile>
              </div>
            </div>

            <div className="show-box_input">
              <ModalEditInfo data={info}></ModalEditInfo>
              {/* <AddShowInput data={info}></AddShowInput> */}
            </div>

            <div className="show-box_content">
              <div className="show-description">
                {/* <textarea rows="13" cols="27" ></textarea> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-box modal-Bottom-box">
          <div className="modal-buttom-box-delete" onClick={deleteShowHandler}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              // className={classes.button}
              startIcon={<RiDeleteBin5Line />}
            >
              삭제
            </Button>
          </div>
          <div className="modal-buttom-box-save" onClick={updateShowHandler}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              // className={classes.button}
              startIcon={<SaveIcon />}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEdit;
