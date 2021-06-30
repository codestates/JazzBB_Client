import React, { useEffect } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
// import { LoginPage } from "./Pages/LoginPage";
import Nav from "./Components/Nav";
import Dummy from "./Pages/dummy";
import BossMainPage from "./Pages/BossMainPage"
import RvManage from "./Components/Boss/RvManage";
import ShowManage from "./Components/Boss/ShowManage";
import PhotoManage from "./Components/Boss/PhotoManage";
import InfoManage from "./Components/Boss/InfoManage";
import { setToken } from './Components/redux/new/action';
require("dotenv").config()


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.itemReducer);

  useEffect(() => {
    const url = new URL(window.location.href);
    console.log(url);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      console.log(authorizationCode)
      axios.post(process.env.REACT_APP_DB_HOST+'/login', { authorizationCode: authorizationCode })
       .then(res => {
        const token = res.data.data.accessToken;
        dispatch(setToken(token));
        console.log(state);
       })
    }
  })

  return (
    <div>
      <Nav></Nav>
      <div>
        <Switch>
          {/* <Route exact path="/" render={() => (<Home></Home> )}  /> */}
          {/* <Route path="/login" render={() => <LoginPage></LoginPage>} /> */}
          <Route path="/login" render={() => <Dummy></Dummy>} />
          <Route path="/boss/main" render={() => <BossMainPage></BossMainPage>} />
          <Route path="/boss/reservation" render={() => <RvManage></RvManage>} />
          <Route path="/boss/show" render={() => <ShowManage></ShowManage> } />
          <Route path="/boss/photo" render={() => <PhotoManage></PhotoManage>} />
          <Route path="/boss/infoedit" render={() => <InfoManage></InfoManage>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
