import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';




const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }, 
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

 
  return (
    <div className="input-outerbox">
      <div className="input-showdate inputdiv" >
      <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="공연날짜"
        type="date"
        defaultValue="2021-07-01"
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
        defaultValue="19:30"
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
        defaultValue="19:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
    <div className="input-showPlayer inputdiv">
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange1}
        >
          <MenuItem value={10}>Pf</MenuItem>
          <MenuItem value={20}>Bs</MenuItem>
          <MenuItem value={30}>Tp</MenuItem>
          <MenuItem value={30}>Dr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="time"
        label="연주자"
        type="text"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
    <div className="input-showPlayer inputdiv">
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange1}
        >
          <MenuItem value={10}>Pf</MenuItem>
          <MenuItem value={20}>Bs</MenuItem>
          <MenuItem value={30}>Tp</MenuItem>
          <MenuItem value={30}>Dr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="time"
        label="연주자"
        type="text"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
    <div className="input-showPlayer inputdiv">
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange1}
        >
          <MenuItem value={10}>Pf</MenuItem>
          <MenuItem value={20}>Bs</MenuItem>
          <MenuItem value={30}>Tp</MenuItem>
          <MenuItem value={30}>Dr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="time"
        label="연주자"
        type="text"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
    <div className="input-showPlayer inputdiv">
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange1}
        >
          <MenuItem value={10}>Pf</MenuItem>
          <MenuItem value={20}>Bs</MenuItem>
          <MenuItem value={30}>Tp</MenuItem>
          <MenuItem value={30}>Dr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="time"
        label="연주자"
        type="text"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
    <div className="input-showPlayer inputdiv">
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange1}
        >
          <MenuItem value={10}>Pf</MenuItem>
          <MenuItem value={20}>Bs</MenuItem>
          <MenuItem value={30}>Tp</MenuItem>
          <MenuItem value={30}>Dr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="time"
        label="연주자"
        type="text"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
    <div className="input-showPlayer inputdiv">
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange1}
        >
          <MenuItem value={10}>Pf</MenuItem>
          <MenuItem value={20}>Bs</MenuItem>
          <MenuItem value={30}>Tp</MenuItem>
          <MenuItem value={30}>Dr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="time"
        label="연주자"
        type="text"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
    </div>
  );
}