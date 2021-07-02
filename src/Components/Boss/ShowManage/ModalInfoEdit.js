import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function CustomizedSelects({data}) {
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

  const [state, setState] = React.useState({
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
 
 const checkedWithoutCOmma = checkedPosition.map(el => el.replaceAll("\"", ""))

//  checkedPosition.map(el => console.log(state.el))
 console.log(checkedWithoutCOmma)

//배열에 있는 키값들 true로 setState.

  const time = data.time
  const start = time.substring(0,5)
  const end = time.substring(6,11)
 
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  };

  const [position, setPosition] = React.useState([]);
  const [player, setPlayer] = React.useState({});
  const PositionChange = (event) => {
    const nKey = event.target.value;
    setPosition([...position, nKey]);
  };
  const handleInputChange = (event) => {
    if (position === "") {
      return <div>포지션을 먼저 선택해주세요</div>;
    } else {
      const nValue = event.target.value;
      setPlayer({ [position]: nValue });
    }
  };
console.log(data)
  return (
    <div className="input-outerbox">
      <div className="input-content-box">
        <TextField
          id="standard-full-width"
          label="공연 소개"
          style={{ margin: 0 }}
          placeholder="공연의 간략한 소개"
          helperText=""
          defaultValue={data.content}
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
          label="공연 가격 (숫자만 입력)"
          type={Number}
          style={{ margin: 0 }}
          placeholder="예 : 20000"
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
            type="date"
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
          defaultValue={start}
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
          defaultValue={end}
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
                defaultChecked={data.player.el}
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
            id="time"
            label="보컬"
            type="text"
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
            id="time"
            label="피아노 연주자"
            type="text"
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
            id="time"
            label="트럼펫 연주자"
            type="text"
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
            id="time"
            label="베이스 연주자"
            type="text"
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
            id="time"
            label="기타 연주자"
            type="text"
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
            id="time"
            label="퍼커션 연주자"
            type="text"
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
            id="time"
            label="드럼 연주자"
            type="text"
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
            id="time"
            label="트럼본 연주자"
            type="text"
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
            id="time"
            label="색소폰 연주자"
            type="text"
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
            id="time"
            label="직접입력"
            type="text"
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
