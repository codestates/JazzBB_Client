import dotenv from "dotenv";
// import{ OAUTH_URI, REACT_APP_KAKAO, REACT_APP_DB_HOST } from "./environment";
import React from "react";
import {
  Switch,
  Route,
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
import Footer from './Components/footer'
import Termspi from './Pages/footer-terms-pi'
import Weareddh from "./Pages/weareddh";

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
          <Route path="/footer/terms" render={() => <Terms></Terms>} />
          <Route path="/footer/termspi" render={() => <Termspi></Termspi>} />
          <Route path="/footer/weareddh" render={() => <Weareddh></Weareddh>} />
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
