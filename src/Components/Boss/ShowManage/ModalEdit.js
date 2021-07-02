import InputFile from "./InputFile";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import ModalEditInfo from './ModalInfoEdit'
import AddShowInput from "./InputFile";
import { RiDeleteBin5Line } from "react-icons/ri";

function ModalEdit({info}) {
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
            <div className="modal-buttom-box-delete">
           
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
      <div className="modal-buttom-box-save">
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
