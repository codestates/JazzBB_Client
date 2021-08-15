import dotenv from "dotenv";
import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux'

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
import ModalEdit from './Components/Boss/ShowManage/ModalEdit'
import NotFound from "./Components/notfound"

dotenv.config();
window.Kakao.init(process.env.REACT_APP_OAUTH);

function App() {
  const state = useSelector(state => state.reducer);
  
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
            if (state.isLogin && !state.user.usertype ) {
              return <Redirect to="/moreinfo" />
            } 
            else if (state.isLogin && state.user.usertype === 'boss' && !state.user.jazzbarId ) {
              return <Redirect to="/boss/infoedit" />
            }
            else {
              return <Redirect to="/service" />
            }
          }
          } />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );

}

export default App;