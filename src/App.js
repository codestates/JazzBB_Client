import dotenv from "dotenv";
// import{ OAUTH_URI, REACT_APP_KAKAO, REACT_APP_DB_HOST } from "./environment";
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
import BreservationPage from "./Components/Boss/Reservation/BreservationPage";
import BshowPage from "./Components/Boss/ShowManage/BshowPage";
import PhotoManage from "./Components/Boss/Photo/PhotoManage";
import BInfoManagePage from "./Components/Boss/InfoManage/BInfoManagePage";
import JazzBarPage from './Pages/JazzBarPage'
import Mypage from "./Pages/MyPage"
import InfoUpdate from "./Components/Boss/InfoManage/InfoUpdate"
import Terms from './Pages/footer-terms'


import { setToken } from './Components/redux/new/action';
dotenv.config();

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const getToken = (authorizationCode) => {
    console.log(state);
    axios.get(process.env.REACT_APP_DB_HOST+'/login', { authorizationCode: authorizationCode })
    .then(res => {
      // console.log(res);
      const token = res.data.data.accessToken;
      dispatch(setToken(token));
    })
    .catch(err => console.log(err))
  }

  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get('code');
  if (authorizationCode) {
    getToken(authorizationCode)
  }
  
  // useEffect(() => {
  // })

  return (
    <div>
      <Nav></Nav>
      <div>
        <Switch>
          {/* <Route exact path="/" render={() => (<Home></Home> )}  /> */}
          {/* <Route path="/login" render={() => <LoginPage></LoginPage>} /> */}
          <Route path="/login" render={() => <Dummy></Dummy>} />
          <Route path="/boss/main" render={() => <BossMainPage></BossMainPage>} />
          <Route path="/boss/reservation" render={() => <BreservationPage></BreservationPage>} />
          <Route path="/boss/show" render={() => <BshowPage></BshowPage> } />
          <Route path="/boss/photo" render={() => <PhotoManage></PhotoManage>} />
          <Route path="/boss/infoedit" render={() => <BInfoManagePage></BInfoManagePage>} />
          <Route path="/boss/infoUpdate" render={() => <InfoUpdate></InfoUpdate>} />
          <Route path="/jazzbar" render={() => <JazzBarPage></JazzBarPage>} />
          <Route path="/mypage" render={() => <Mypage></Mypage>} />
          <Route path="/footer/terms" render={() => <Terms></Terms>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
