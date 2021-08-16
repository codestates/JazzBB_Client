import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setList, setJazzbar, setToken } from "../Components/redux/new/action"
import Sidebar from "../Components/Boss/Sidebar";
import "../css/sidebar.css";
import "../css/BossMainPage.css";
import JazzBarPage from "./JazzBarPage";

function BossMainPage() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);



  useEffect(async ()=> {
    // if(!state.token || state.user.usertype !== 'boss' ){
    //   if(!state.togle.bossModal){
    //     dispatch(modifySwitch('bossModal'))
    //   }
    // } else {
      await axios.get(process.env.REACT_APP_DB_HOST + "/jazzbarRead")
     .then(async res => {
       const list = res.data.data;
       await dispatch(setList(list, 'barList'));
      })

      const barId = await axios.get(process.env.REACT_APP_DB_HOST + '/userinfo', { headers: { authorization: state.token }, withCredentials: true })
       .then(res => {
        const token = res.data.data.accessToken;
        const jazzbarId = res.data.data.userinfo.jazzbarId;
        dispatch(setToken(token));
        dispatch(setJazzbar(jazzbarId));
        return jazzbarId;
       })
      
       await axios.post(process.env.REACT_APP_DB_HOST + '/showRead', {jazzbarId: barId})
       .then(res => {
         const list = res.data.data;
         dispatch(setList(list, 'showList'));
       })

       await axios
       .post(process.env.REACT_APP_DB_HOST + "/menuRead", {
         jazzbarId: barId,
       })
       .then((res) => {
         console.log("******** : ", res.data)
         if(res.data.data.data[0]){
           let list = res.data.data.data[0].thumbnail
           list = list.split(',')
           dispatch(setList(list, "menu"));
         }
       })
      //  .catch((err) => console.log(err));
    // }
  }, [])

  return (
    <div className="App">
      <Sidebar ></Sidebar>
      <div className="contentsWrapper">
        <div className="dummydiv"></div>
        <div className="jbpage">
          {
            state.barList && state.currentJazzbar ? 
            <JazzBarPage></JazzBarPage>
            :
            <div className="boss-main-warning-Wrapper">
              <div className="boss-main-dummydiv"></div>
              <div className="boss-main-not-exist">매장 정보가 존재하지 않습니다. 정보수정 메뉴에서 매장을 생성해주세요</div>
            </div>
          }
        </div>
        
      </div>
    </div>
  );
}

export default BossMainPage;
