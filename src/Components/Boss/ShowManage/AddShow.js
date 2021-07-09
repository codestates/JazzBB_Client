import AddShowInput from "./AddInput";
import InputFile from "./InputFile";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import React, { useState } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function AddShow() {
  const [player, setPlayer] = React.useState({});
  const [inputValue, SetInputValue] = useState({
    id: "02",
    jazzbarId: "01",
    player: [],
    thumbnail: "", //server 코드에서 thumbnail 빠져있음. 추후 논의 필요.
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    if (name !== "player") {
      const nameValue = event.target.value;
      SetInputValue({ ...inputValue, [name]: nameValue });
    } else {
      setPlayer({ ...player, [event.target.id]: event.target.value });
    }
  };

  const CreateShow = () => {
    confirmAlert({
      title: "새로운 공연을 등록하시겠습니까?",
      buttons: [
        {
          label: "예",
          onClick:  () => {
            axios
              .post(process.env.REACT_APP_DB_HOST + "/showCreate", inputValue)
              .then((res) => (window.location.href = "/boss/show"));
            //server-showCreate  :jazzbar_id 빠짐....!!!
          },
        },
        {
          label: "아니오",
        },
      ],
    });
  };
  const handleAddShow = async () => {
    const StartEndtime = `${inputValue.startTime}-${inputValue.endTime}`;
    await SetInputValue({
      ...inputValue,
      time: StartEndtime,
      player: [player],
    });
    CreateShow();
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
              <AddShowInput
                handleInputChange={handleInputChange}
              ></AddShowInput>
            </div>

            <div className="show-box_content">
              <div className="show-description"></div>
            </div>

            <div className="bottom-box">
          <Button variant="contained" color="primary" size="large" onClick={handleAddShow} 
            // className={classes.button}
            startIcon={<SaveIcon />}
          >
            등록
          </Button>
        </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShow;
