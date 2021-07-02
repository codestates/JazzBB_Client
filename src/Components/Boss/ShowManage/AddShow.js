import AddShowInput from "./AddInput";
import InputFile from "./InputFile";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

function AddShow() {
  const addInputTime = () => {
    return <input type="text"></input>;
  };
  return (
    <div>
      <div className="show-box">
        <div className="top-box">
          <div className="show-innerbox">
            <div className="show-box_photo">
              <div className="show-photo">
                <InputFile></InputFile>
              </div>
            </div>

            <div className="show-box_input">
              <AddShowInput></AddShowInput>
            </div>

            <div className="show-box_content">
              <div className="show-description">
                {/* <textarea rows="13" cols="27" ></textarea> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-box">
        <Button
        variant="contained"
        color="primary"
        size="large"
        // className={classes.button}
        startIcon={<SaveIcon />}
      >
        등록
      </Button>
        </div>
      </div>
    </div>
  );
}

export default AddShow;
