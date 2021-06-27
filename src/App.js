import React from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import Nav from "./Components/Nav";
import Dummy from "./Pages/dummy";
import BossMainPage from "./Pages/BossMainPage"
import RvManage from "./Components/Boss/RvManage";
import ShowManage from "./Components/Boss/ShowManage";
import PhotoManage from "./Components/Boss/PhotoManage";
import InfoManage from "./Components/Boss/InfoManage";

function App() {
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
