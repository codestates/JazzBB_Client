import dotenv from "dotenv";
// import{ OAUTH_URI, REACT_APP_KAKAO, REACT_APP_DB_HOST } from "./environment";
import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
// import { LoginPage } from "./Pages/LoginPage";
import Nav from "./Components/Nav";
import BossMainPage from "./Pages/BossMainPage"
import BreservationPage from "./Components/Boss/Reservation/BreservationPage";
import BshowPage from "./Components/Boss/ShowManage/BshowPage";
import PhotoManage from "./Components/Boss/Photo/PhotoManage";
import BInfoManagePage from "./Components/Boss/InfoManage/BInfoManagePage";
import Reservation from "./Pages/ReservationPage";
import JazzBarPage from './Pages/JazzBarPage'
import Mypage from "./Pages/MyPage"
import Boardinfo from "./Pages/JazzInfoPosting"
import Board from "./Pages/JazzInfoPage"
import InfoUpdate from "./Components/Boss/InfoManage/InfoUpdate"
import Terms from './Pages/footer-terms'
import Moreinfo from "./Pages/MoreUserInfo"

import { checkFirst, setToken, setUser } from './Components/redux/new/action';
dotenv.config();

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  const getToken = (authorizationCode) => {
    console.log(state);
    axios.post(process.env.REACT_APP_DB_HOST+'/login', { authorizationCode: authorizationCode })
    .then(res => {
      // console.log(res);
      let token = res.data.data.accessToken;
      axios.get(process.env.REACT_APP_DB_HOST+'/userinfo', {authorization: token})
       .then(resp => {
         token = resp.data.data.accessToken;
         const userinfo = resp.data.data.userinfo;
         dispatch(setToken(token));
         dispatch(setUser(userinfo));
         if(!!state.user.token && !state.user.mobile){
           dispatch(checkFirst());
         };
       });
    })
    .catch(err => console.log(err))
  }

  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get('code');
  if (authorizationCode) {
    getToken(authorizationCode)
  }

  return (
    <div>
      {
        !state.firstCheck ?
        <Nav></Nav>
        :
        ''
      }
      <div>
        <Switch>
          <Route path="/boss/main" render={() => <BossMainPage></BossMainPage>} />
          <Route path="/boss/reservation" render={() => <BreservationPage></BreservationPage>} />
          <Route path="/boss/show" render={() => <BshowPage></BshowPage> } />
          <Route path="/boss/photo" render={() => <PhotoManage></PhotoManage>} />
          <Route path="/boss/infoedit" render={() => <BInfoManagePage></BInfoManagePage>} />
          <Route path="/boss/infoUpdate" render={() => <InfoUpdate></InfoUpdate>} />
          <Route path="/jazzbar" render={() => <JazzBarPage></JazzBarPage>} />
          <Route path="/reservation" render={() => <Reservation></Reservation>} />
          <Route path="/posting" render={()=> <Boardinfo></Boardinfo>}/>
          <Route path="/board" render={()=> <Board></Board>} />
          <Route path="/mypage" render={() => <Mypage></Mypage>} />
          <Route path="/moreinfo" render={() => <Moreinfo></Moreinfo>} />
          <Route path="/" render={() => {
            if(state.firstCheck){
              return <Redirect to="/moreinfo" />
            } else {
              return <Redirect to="/service" />
            }
            }} />
          <Route path="/footer/terms" render={() => <Terms></Terms>} />

          {
            state.firstCheck ? 
            <Redirect to="/moreinfo" />
            :
            state.user.isLogin ?
            <Redirect to="/service" />
            : ''
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;
