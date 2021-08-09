import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { RiDeleteBin5Line } from "react-icons/ri";
import { setToken } from "../../redux/new/action";

import "react-confirm-alert/src/react-confirm-alert.css";

export default function CustomizedSelects({ data, imgFile }) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const time = data.time;
  const start = time.substring(0, 5);
  const end = time.substring(6, 11);
  const initstate = useSelector((state) => state.reducer);
  const [state, setState] = useState({
    singer: false,
    piano: false,
    guitar: false,
    base: false,
    drum: false,
    trumpet: false,
    trombone: false,
    saxophone: false,
    percussion: false,
    etc: false,
  });
  const [player, setPlayer] = React.useState(data.player);
  const [inputValue, SetInputValue] = useState({...data,});
  const playerArr = Object.keys(state);
  const defaultPlayer = Object.keys(data.player)
  
  const findName = (el) =>{
    if(defaultPlayer.find(ele => ele === el) === undefined){
        return null;
    }else{
      return data.player[el]
    }
   }
  
  useEffect(() => {
    SetInputValue({...inputValue, startTime:start, endTime:end})
    console.log(data)
  let copy = state;
  for(let position in data.player){
    copy[position] = true
  }
   setState(copy)

  }, []);

  

  const handleChange = (event) => {
    if (player[event.target.name]) {
      const copy = player;
      delete copy[event.target.name];
      setPlayer(copy);
      console.log(player)
    }
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  };

  

  const handleInputChange = (event) => {
    const name = event.target.name;
    const nameValue = event.target.value;
    const idValue = event.target.id;
    if(name === 'endTime' || name === 'startTime'){
      SetInputValue({ ...inputValue, [name]: nameValue });
    }
    else if (name !== "player") {
      SetInputValue({ ...inputValue, [name]: nameValue });
    } else {
      setPlayer({...player, [idValue] : nameValue})
    }
    // console.log(player)
  };


  const updateShowHandler = () => {
    SetInputValue({ ...inputValue, time : `${inputValue.startTime}-${inputValue.endTime}` });

    if(imgFile.length === 0){
      imgFile = data.thumbnail;
    }
    const filefile = new FormData();
    filefile.append('thumbnail', imgFile)
    filefile.append('content',inputValue.content )
    filefile.append('time',`${inputValue.startTime}-${inputValue.endTime}` )
    filefile.append('date',inputValue.date )
    filefile.append('showCharge',inputValue.showCharge )
    filefile.append('player', JSON.stringify(player))
    filefile.append('jazzbarId', initstate.jazzBarId )
    filefile.append('id', data.id )
    axios
      .post(
        process.env.REACT_APP_DB_HOST + "/showUpdate",
        filefile,
        {
          headers: {
            authorization: initstate.token,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        const token1 = res.data.data.accessToken;
        dispatch(setToken(token1));
      })
      .then((res) => {
        console.log("updateShowHandler");
        window.location.href='/boss/show'
      });
  };

  const deleteShowHandler = () => {
    axios
      .post(
        process.env.REACT_APP_DB_HOST + "/showDelete",
        {
          jazzbarId: data.jazzbarId,
          id: data.id,
        },
        {
          headers: {
            authorization: initstate.token,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        const token1 = res.data.data.accessToken;
        dispatch(setToken(token1));
      })
      .then((res) => {
        console.log("deleteShowHandler success");
        window.location.href='/boss/show'
      });
  };

  return (
    <div className="input-outerbox">
      <div className="input-content-box2">
        <TextField
          className="blahblah"
          label="공연 소개"
          name="content"
          style={{ margin: 0 }}
          placeholder="공연의 간략한 소개"
          helperText=""
          defaultValue={data.content}
          onChange={handleInputChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="input-content-box inputdiv">
        <TextField
          id="standard"
          name="showCharge"
          label="공연 가격 (숫자만 입력)"
          type={Number}
          style={{ margin: 0 }}
          placeholder="예 : 20000"
          onChange={handleInputChange}
          defaultValue={data.showCharge}
          helperText=""
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className="input-showdate inputdiv">
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="공연날짜"
            name="date"
            type="date"
            onChange={handleInputChange}
            defaultValue={data ? data.date : null}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className="input-showtime inputdiv">
        <TextField
          id="time"
          label="공연 시작 시간"
          type="time"
          name="startTime"
          defaultValue={start}
          onChange={handleInputChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time"
          label="공연 종료 시간"
          type="time"
          name="endTime"
          defaultValue={end}
          onChange={handleInputChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </div>
      <div>
        <div className="checkbox-alert">
          * 연주자들의 포지션을 선택해주세요.
        </div>
        <div className="checkBox">
          {playerArr.map((el) => (
            <div>
              <input
                type="checkbox"
                name={el}
                defaultChecked={
                  defaultPlayer.find(ele => ele === el) ? true : false
                }
                value={state.el}
                onChange={handleChange}
              />
              <div>{el}</div>
            </div>
          ))}
        </div>
      </div>
        <div className="input-nametag">



        {state.singer === true || data.player["singer"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="singer"
            label="보컬"
            type="text"
            name="player"
            placeholder="보컬 이름"
            onChange={handleInputChange}
            defaultValue={findName("singer")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.piano || data.player["piano"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="piano"
            label="피아노 연주자"
            type="text"
            name="player"
            placeholder="피아노 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("piano")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.trumpet || data.player["trumpet"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="trumpet"
            label="트럼펫 연주자"
            type="text"
            name="player"
            placeholder="트럼펫 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("trumpet")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.base || data.player["base"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="base"
            label="베이스 연주자"
            type="text"
            name="player"
            placeholder="베이스 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("base")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.guitar || data.player["guitar"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="guitar"
            label="기타 연주자"
            type="text"
            name="player"
            placeholder="기타 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("guitar")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.percussion || data.player["percussion"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="percussion"
            label="퍼커션 연주자"
            type="text"
            name="player"
            placeholder="퍼커션 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("percussion")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.drum || data.player["drum"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="drum"
            label="드럼 연주자"
            type="text"
            name="player"
            placeholder="드럼 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("drum")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 10, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.trombone || data.player["trombone"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="trombone"
            label="트럼본 연주자"
            type="text"
            name="player"
            placeholder="트럼본 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("trombone")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 10, // 5 min
            }}
          />
        </div>
      ) : null}
      {state.saxophone || data.player["saxophone"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="saxophone"
            label="색소폰 연주자"
            type="text"
            name="player"
            placeholder="색소폰 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("saxophone")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 10, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.etc || data.player["etc"] ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="etc"
            label="직접입력 "
            type="text"
            name="player"
            placeholder="포지션 : 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            defaultValue={findName("etc")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1, // 5 min
            }}
          />
        </div>
      ) : null}

<div className="modify-bottom-box">
        <div className="modify-delete-btn">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={deleteShowHandler}
            startIcon={<RiDeleteBin5Line />}
          >
            삭제
          </Button>
        </div>
        <div className="modify-save-btn">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={updateShowHandler}
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
