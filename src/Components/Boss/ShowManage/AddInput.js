import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function CustomizedSelects({handleInputChange}) {
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
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  };
  const playerArr = Object.keys(state);
  

  return (
    <div className="input-outerbox">
      <div className="input-content-box inputdiv">
      <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />;
      <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
        <TextField
          id="standard-full-width"
          name="content"
          label="공연 소개"
          style={{ margin: 0 }}
          placeholder="공연의 간략한 소개"
          helperText=""
          fullWidth
          onChange={handleInputChange}
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
          label="공연 가격"
          type={Number}
          style={{ margin: 0 }}
          placeholder="예 : 20000"
          onChange={handleInputChange}
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
            name = "date"
            label="공연날짜"
            type="date"
            defaultValue="2021-07-01"
            className={classes.textField}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className="input-showtime inputdiv">
        <TextField
          id="time"
          name = "startTime"
          label="공연 시작 시간"
          type="time"
          defaultValue="19:30"
          className={classes.textField}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time"
          name = "endTime"
          label="공연 종료 시간"
          type="time"
          defaultValue="19:30"
          className={classes.textField}
          onChange={handleInputChange}
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
            name="player"
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
            id="time"
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
