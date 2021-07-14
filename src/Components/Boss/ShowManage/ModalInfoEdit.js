import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CustomizedSelects({data}) {
  // console.log(data)
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
  const playerArr = Object.keys(state);
  const checkedPosition = data.player.map(el=> el.position)

  // const yap = () => checkedPosition.map(el=> console.log())
  const yap = () => checkedPosition.map(el=> setState({...state,  [el] : true}))
  useEffect(() => {
   yap()
  }, [])
  
  // console.log(state)



  const time = data.time
  const start = time.substring(0,5)
  const end = time.substring(6,11)
 
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  };


const [player, setPlayer] = React.useState({});
const [inputValue, SetInputValue] = useState({...data, 
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
    // console.log(inputValue)
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
    <div className="input-outerbox">
      <div className="input-content-box">
        <TextField
          id="standard-full-width"
          label="공연 소개"
          name = "content"
          style={{ margin: 0 }}
          placeholder="공연의 간략한 소개"
          helperText=""
          defaultValue={data.content}
          onChange={handleInputChange}
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
          name = "showCharge"
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
            name = "date"
            type="date"
            onChange={handleInputChange}
            defaultValue={data ? data.date : "2021-07-01"}
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
        <div className="checkbox-alert">* 연주자들의 포지션을 선택해주세요.</div>
        <div className="checkBox">
          {playerArr.map((el) => (
            <div>
              <input
                type="checkbox"
                name={el}
                defaultChecked={checkedPosition.find(ele => ele === el) ? true : false}
                value={state.el}
                onChange={handleChange}
              />
              <div>{el}</div>
            </div>
          ))}
        </div>
      </div>
      {state.singer ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="singer"
            label="보컬"
            type="text"
            name="player"
            placeholder="보컬 이름"
            onChange={handleInputChange}
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

      {state.piano ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="piano"
            label="피아노 연주자"
            type="text"
            name="player"
            placeholder="피아노 연주자 이름"
            onChange={handleInputChange}
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

      {state.trumpet ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="trumpet"
            label="트럼펫 연주자"
            type="text"
            name="player"
            placeholder="트럼펫 연주자 이름"
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
      ) : null}

      {state.base ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="base"
            label="베이스 연주자"
            type="text"
            name="player"
            placeholder="베이스 연주자 이름"
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
      ) : null}

      {state.guitar ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="guitar"
            label="기타 연주자"
            type="text"
            name="player"
            placeholder="기타 연주자 이름"
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
      ) : null}

      {state.percussion ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="percussion"
            label="퍼커션 연주자"
            type="text"
            name="player"
            placeholder="퍼커션 연주자 이름"
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
      ) : null}

      {state.drum ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="drum"
            label="드럼 연주자"
            type="text"
            name="player"
            placeholder="드럼 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 10, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.trombone ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="trombone"
            label="트럼본 연주자"
            type="text"
            name="player"
            placeholder="트럼본 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 10, // 5 min
            }}
          />
        </div>
      ) : null}
      {state.saxophone ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="saxophone"
            label="색소폰 연주자"
            type="text"
            name="player"
            placeholder="색소폰 연주자 이름"
            onChange={handleInputChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 10, // 5 min
            }}
          />
        </div>
      ) : null}

      {state.etc ? (
        <div className="input-showPlayer inputdiv">
          <TextField
            id="etc"
            label="직접입력"
            type="text"
            name="player"
            placeholder="연주자 이름"
            onChange={handleInputChange}
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
    </div>
  );
}
