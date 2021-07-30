import AddShowInput from "./AddInput";
import InputFile from "./InputFile";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import React, { useState } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { setToken } from "../../redux/new/action";
import { useSelector, useDispatch } from "react-redux";
//공연 추가하는 페이지.
function AddShow() {
  const dispatch = useDispatch();
  const userstate = useSelector((state) => state.reducer);
  const jazzbarId = useSelector((state) => state.reducer.jazzBarId);
  const [imgFile, setImgFile] = useState([]);
  const [players, setPlayer] = React.useState({});
  const [inputValue, SetInputValue] = useState({
    jazzbarId: "01",
    player: [],
    thumbnail: [],
  });

  function handelSetImgFile(data) {
    setImgFile(data);
  }

  function handleThumbnail(e) {
    console.log(inputValue, "dddddd");
    if (imgFile.length !== 0) {
      console.log("******** Addshow handleThumbnail imgFile :", imgFile);
    }
  }

  //인풋 창에 입력할때마다 불리는 함수
  const handleInputChange = (event) => {
    const name = event.target.name;
    if (name !== "player") {
      const nameValue = event.target.value;
      SetInputValue({ ...inputValue, [name]: nameValue });
    } else {
      setPlayer({ ...players, [event.target.id]: event.target.value });
      SetInputValue({ ...inputValue, player: players });
    }
  };

  //등록 버튼 눌렀을 때 불리는 함수.
  const CreateShow = () => {
    confirmAlert({
      title: "새로운 공연을 등록하시겠습니까?",
      buttons: [
        {
          label: "예",
          onClick: () => {
            const filefile = new FormData();
            filefile.append("thumbnail", imgFile);
            filefile.append("content", inputValue.content);
            filefile.append(
              "time",
              `${inputValue.startTime}-${inputValue.endTime}`
            );
            filefile.append("date", inputValue.date);
            filefile.append("showCharge", inputValue.showCharge);
            filefile.append("player", JSON.stringify(inputValue.player));
            filefile.append("jazzbarId", jazzbarId);
            for (var pair of filefile.entries()) { console.log(pair[0]+ ', ' + pair[1]); }

           console.log(userstate.token)
           console.log(typeof userstate.token)
            axios
              .post(process.env.REACT_APP_DB_HOST + "/showCreate", filefile, {
                headers: {
                  authorization: userstate.token,
                  "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
              })
              .then((res) => {
                const token = res.data.data.accessToken;
                dispatch(setToken(token));
              })
              .then((res) => console.log(res, "res"))
              .then((res) => (window.location.href = "/boss/show"))
              .catch(function (error) {
                console.log(error);
              });
          },
        },
        {
          label: "아니오",
        },
      ],
    });
  };

  return (
    <div>
      <div className="show-box">
        <div className="top-box">
          <div className="show-innerbox">
            <div className="show-box_photo">
              <div className="show-photo">
                <InputFile
                  handleThumbnail={handleThumbnail}
                  imgFile={imgFile}
                  setImgFile={handelSetImgFile}
                ></InputFile>
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
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={CreateShow}
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
