import dotenv from "dotenv";
// import{ OAUTH_URI, REACT_APP_KAKAO, REACT_APP_DB_HOST } from "./environment";
import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory
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
import Search from "./Pages/Search"
import Footer from './Components/footer'
import Termspi from './Pages/footer-terms-pi'
import Weareddh from "./Pages/weareddh";
import Service from "./Pages/ServicePage";

import { setJazzId, saveReducer, checkFirst, setToken, setUser, isLogin, finishAction,} from './Components/redux/new/action';
// 
import ModalEdit from './Components/Boss/ShowManage/ModalEdit'
import NotFound from "./Components/notfound"

dotenv.config();

function App() {
  const dispatch = useDispatch();
  let history = useHistory();
  const jazzbarId = useSelector(state => state.reducer.jazzBarId);
  const state = useSelector(state => state.reducer);
  const oauth = useSelector(state => state.oauthReducer)
  // const [user, setUserInfo] = useState({})
  // const [token, setStateToken] = useState('')
  // const [loginSwitch, setIsLogin] = useState(false)
  // const [checkFirst, setCheckFirst] = useState(false)
  // const [finishAction, setFinishAction] = useState(false)


  // const handleUser = (data) =>{
  //   setUserInfo(data)
  // }
  const firstLogin = () => {
    if (oauth.token && !oauth.user.usertype) {
      dispatch(checkFirst());
      // setCheckFirst(true)
    };
    // setFinishAction(true)
    dispatch(finishAction());
  }
  

  const getToken = async (authorizationCode) => {

    let token = await axios.post(process.env.REACT_APP_DB_HOST+'/login', { authorizationCode: authorizationCode },{withCredentials : true})
    .then(res =>{
      if(res.data.data.jazzbarId){
        const jazzBarId =res.data.data.jazzbarId
        dispatch(setJazzId(jazzBarId))
        window.localStorage.setItem("jazzbarId", JSON.stringify(jazzBarId));
      }
      return res.data.data.accessToken;
    })
    .catch(err => console.log(err))


    await axios.get(process.env.REACT_APP_DB_HOST + '/userinfo', { headers: { authorization: token }, withCredentials: true })
      .then(resp => {
        token = resp.data.data.accessToken;
        const userinfo = resp.data.data.userinfo;
        // handleUser(userinfo)
        // setStateToken(tokenData)
        // setIsLogin(!loginSwitch)
        dispatch(setUser(userinfo));
        dispatch(setToken(token));
        dispatch(isLogin())
        // firstLogin();
        history.push('/')
        dispatch(saveReducer(state.isLogin, state.user, state.token, state.checkFirst))
        
      });
    }
    // console.log(typeof user, "user, token, inLogin, checks")
    // console.log(user, "user, token, inLogin, checks")
    // console.log(token, "tokeeeeeeeeeeeen")
    
    useEffect(async () => {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      // console.log(state, "state!!!!!!!")
      console.log(authorizationCode, "oauth!!!!!!!")
      if (authorizationCode) {
        await getToken(authorizationCode)
        // await console.log(isLogin);
        // await console.log(user);
        // await console.log(token);
    } else {
      // setFinishAction(true)
      dispatch(finishAction());
    }

  }, [])

  return (
    <div>
      {
        <Nav></Nav>
      }
      <div>
        <Switch>
          <Route path="/boss/main" render={() => <BossMainPage></BossMainPage>} />
          <Route path="/boss/reservation" render={() => <BreservationPage></BreservationPage>} />
          <Route path="/boss/show" render={() => <BshowPage></BshowPage>} />
          <Route path="/boss/photo" render={() => <PhotoManage></PhotoManage>} />
          <Route path="/boss/infoedit" render={() => <BInfoManagePage></BInfoManagePage>} />
          <Route path="/boss/infoupdate" render={() => <InfoUpdate></InfoUpdate>} />
          <Route path="/boss/modaledit" render={() => <ModalEdit></ModalEdit>} />
          <Route path="/jazzbar" render={() => <JazzBarPage></JazzBarPage>} />
          <Route path="/reservation" render={() => <Reservation></Reservation>} />
          <Route path="/posting" render={() => <Boardinfo></Boardinfo>} />
          <Route path="/board" render={() => <Board></Board>} />
          <Route path="/mypage" render={() => <Mypage></Mypage>} />
          <Route path="/moreinfo" render={() => <Moreinfo></Moreinfo>} />
          <Route path="/search" render={() => <Search></Search>} />
          <Route path="/service" render={() => <Service></Service>} />
          <Route path="/footer/terms" render={() => <Terms></Terms>} />
          <Route path="/footer/termspi" render={() => <Termspi></Termspi>} />
          <Route path="/footer/weareddh" render={() => <Weareddh></Weareddh>} />
          <Route path="/boss" render={() => <Redirect to="/boss/main"/>} />
          <Route path="/" render={() => {
            if ( !state.user.usertype && state.isLogin && state.finishAction ) {
              return <Redirect to="/moreinfo" />
            } 
            else if (state.isLogin && state.user.usertype === 'boss' && !state.user.jazzbarId && state.finishAction ) {
              return <Redirect to="/boss/infoedit" />
            } else {
              return <Redirect to="/service" />
            }
          }
          } />


          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );

}

export default App;