import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { CgEnter } from 'react-icons/cg';
import { BsTextCenter } from 'react-icons/bs';
import ReserByDate from './ReserByDate'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function LabTabs() {
  const [All, SetNotAll] =React.useState(false)
  const set = () =>{
    SetNotAll(true)
    console.log('yap')
  }
 
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="전체 예약 보기" value="1"  onClick={set}/>
            <Tab label="날짜별 예약 보기" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1"><ReserByDate  AllPage={All}></ReserByDate></TabPanel>
        <TabPanel value="2"> <ReserByDate ></ReserByDate></TabPanel>
      </TabContext>
    </div>
  );
}