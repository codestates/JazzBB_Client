import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ReserByDate from './ReserByDate'
import ReserAll from './ReserALL'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function LabTabs({unset,set, all}) {
  
 
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
            <Tab label="전체 예약 관리" value="1"  />
            <Tab label="날짜별 예약 리스트" value="2" />
            {/* <Tab label="날짜별 예약 보기" value="3" /> */}
          </TabList>
        </AppBar>
        <TabPanel value="2"><ReserByDate  AllPage={all} setAll={set} unsetAll={unset}></ReserByDate></TabPanel>
        <TabPanel value="1"> <ReserAll></ReserAll></TabPanel>
        {/* <TabPanel value="3"> <ReserByShow ></ReserByShow></TabPanel> */}
      </TabContext>
    </div>
  );
}