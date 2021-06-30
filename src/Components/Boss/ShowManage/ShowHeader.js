import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { CgEnter } from 'react-icons/cg';
import { BsTextCenter } from 'react-icons/bs';
import AddShow from './AddShow'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function LabTabs() {
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
            <Tab label="등록한 공연 리스트" value="1" />
            <Tab label="새로운 공연 등록하기" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1">Item Oneㅇㅇ</TabPanel>
        <TabPanel value="2"> <AddShow></AddShow></TabPanel>
      </TabContext>
    </div>
  );
}