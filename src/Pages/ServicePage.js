import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { saveThisHistory, search, selectSearchType, saveSearchData, setJazzbar, setList, setBoard, addEveryShowList, setCurrentPage } from "../Components/redux/new/action";
import "../css/service.css"
import SimpleSlider from "../Components/adbanner";

function Service () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer)
  let thisDate = new Date().toLocaleDateString().replace(/\. /g,'-').replace(/\./g,'');
  if(thisDate[6] === '-'){
    let front = thisDate.slice(0,5);
    let tail = thisDate.slice(5);
    thisDate = front + 0 + tail;
  }
  if(thisDate[thisDate.length-2] === '-'){
    let front = thisDate.slice(0,8);
    let tail = thisDate.slice(8);
    thisDate = front + 0 + tail;
  }





  useEffect(async()=>{
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
    await axios.get(process.env.REACT_APP_DB_HOST + "/jazzbarRead")
     .then(async res => {
       const list = res.data.data;
       dispatch(setList(list, 'barList'));
      })
      .catch(err => console.log(err))
      
      await axios.get(process.env.REACT_APP_DB_HOST + "/boardRead")
      .then(res => {
        const list = res.data.data;
        dispatch(setList(list, 'boardList'));
      })
      .catch(err => console.log(err))
      await axios.post(process.env.REACT_APP_DB_HOST + "/showRead")
      .then(res => {
        const showList = res.data.data;
        dispatch(addEveryShowList(showList));
      })
      .catch(err => console.log(err))
    }, [])
 

  const goJazzbar = (jazzbar) => {
    dispatch(setJazzbar(jazzbar.id));
  }

  const goPosting = (posting) => {
    dispatch(setBoard(posting.id));
  }

  

  const goSearch = (type, input) => {
    dispatch(selectSearchType(type));
    dispatch(search(input));
    axios.get(process.env.REACT_APP_DB_HOST + state.searchOption, { content: state.search })
     .then(res => {
        const response = res.data.data.searchData;
        dispatch(saveSearchData(response));
     })
  }

  return (
        <div className="service">
          <div className="service-body">
            <SimpleSlider></SimpleSlider>
            {/* <Link to="/posting" className="service-bannerWrapper" onClick>
                <img id="service-banner-top" src="/img/resource/service-banner-top.png" alt="banner(top)"/>
            </Link> */}
            <Link to="/search" className="service-search">
                <div className="service-search-label">search</div>
                <input className="service-search-form" type="text" />
                <button className="service-search-submit">??????</button>
            </Link>
            <div className="service-location">
                <div className="service-location-label">????????? ?????????????</div> 
                <div className="service-location-objarea">
                    <Link to="/search" onClick={()=> goSearch('/searchJazzbar', '?????? ?????????')} className="service-location-object" style={{"background-image": "url(/resource/location-apgujeong.png)"}}><span className="service-location-btn-label">??????</span></Link>
                    <Link to="/search" onClick={()=> goSearch('/searchJazzbar', '?????? ?????????')} className="service-location-object" style={{"background-image": "url(/resource/location-itaewon.png)"}}><span className="service-location-btn-label">?????????/<br />??????</span></Link>
                    <Link to="/search" onClick={()=> goSearch('/searchJazzbar', '?????? ?????????')} className="service-location-object" style={{"background-image": "url(/resource/location-sungsoo.png)"}}><span className="service-location-btn-label">??????</span></Link>
                    <Link to="/search" onClick={()=> goSearch('/searchJazzbar', '?????? ?????????')} className="service-location-object" style={{"background-image": "url(/resource/location-hongdae.png)"}}><span className="service-location-btn-label">??????/<br />??????</span></Link>
                    <Link to="/search" onClick={()=> goSearch('/searchJazzbar', '?????? ??????')} className="service-location-object" style={{"background-image": "url(/resource/location-euljiro.png)"}}><span className="service-location-btn-label">?????????</span></Link>
                    <Link to="/search" onClick={()=> goSearch('/searchJazzbar', '?????? ?????????')} className="service-location-object" style={{"background-image": "url(/resource/location-gwanghwamun.png)"}}><span className="service-location-btn-label">?????????/<br />??????</span></Link>
                    <Link to="/search" onClick={()=> goSearch('/searchJazzbar', '?????? ????????????')} className="service-location-object" style={{"background-image": "url(/resource/location-yeouido.png)"}}><span className="service-location-btn-label">?????????</span></Link>
                </div>
            </div>
            <div className="service-liveon">
                <div className="service-liveon-header">
                    <div className="service-liveon-label">????????? ON</div>
                    <div className="service-liveon-sublabel">?????? ????????? ????????? ?????? ???????????? ???????????????</div>
                </div>
                <div className="service-liveon-container">
                    <div className="v-scroll-inner">
                      <div className="service-liveon-contents">
                      

                      {
                        state.everyShowList.length !== 0 ?
                        state.everyShowList.map(el => {
                          return el.date === thisDate ?
                             (
                            <Link to="/jazzbar" className="service-liveon-object"  onClick={()=> goJazzbar(state.barList.find(bar => bar.id === el.jazzbarId))}>
                              <a className="liveon-object-header">
                                <div className="liveon-object-header-label">

                                  <span className="liveon-object-header-profile-pic" style={state.barList.find(bar => bar.id === el.jazzbarId)? {"background-image": "url("+state.barList.find(bar => bar.id === el.jazzbarId).thumbnail+")"}: {"background-image": "url(/img/resource/jazzbb_logo_black.png)"}}></span>

                                  <span className="liveon-object-header-profile-name">{state.barList.find(bar => bar.id === el.jazzbarId).barName}</span>
                                </div>
                              </a>
                              <a className="liveon-object-body">
                                <div className="liveon-object-body-img">
                                  <img className="liveon-object-body-img-link" src={!!el.thumbnail ? el.thumbnail : state.barList.find(bar => bar.id === el.jazzbarId).thumbnail} />
                                </div>
                              </a>
                              <div className="liveon-object-footer">
                                    <div className="liveon-object-body-detail">
                                        <div className="liveon-object-body-detail-location">{state.barList.find(bar => bar.id === el.jazzbarId).address}</div>
                                        <div className="liveon-object-body-detail-meta">
                                            <span className="liveon-object-body-detail-star">???</span>
                                            <span className="liveon-object-body-detail-score">{state.barList.find(bar => bar.id === el.jazzbarId).rating}</span>
                                        </div>
                                    </div>
                              </div>
                            </Link>
                            )
                          :
                          null
                        })
                        : null
                      }



                        </div>
                    </div>
    
                </div>

            </div>

            <Link to="/posting" onClick={()=> goPosting(state.boardList[0])}><img id="service-banner-middle" src="/img/resource/service-banner-middle.png" alt="banner(middle)" /></Link>

            <div className="service-popular">
                <div className="service-popular-header">
                    <div className="service-popular-label">?????? ?????????</div>
                    <div className="service-popular-sublabel">???????????? ??????????????????, ??????????????? ??????????????????</div>
                </div>
                
                <div className="service-popular-body">
                    <div className="service-popular-container">
                        <div className="v-scroll-inner">
                            <div className="service-popular-contents">

                                {
                                  state.boardList.length !== 0 ?
                                  state.boardList.reverse().map(el => {
                                    return (
                                      <Link to="/posting" className="service-popular-object" onClick={()=> goPosting(el)}>
                                          <a className="service-popular-object-photobox">
                                              <div className="service-popular-object-img" style={{"background-image": `url(${el.thumbnail})`}}></div>
                                          </a>

                                          <div className="service-popular-object-footer">
                                              <div className="popular-object-footer-name">{el.title.length > 10 ? el.title.slice(0,8) + '...' : el.title}</div>
                                              <span className="popular-object-footer-tags">{el.content.slice(0,10)}</span>
                                          </div>
                                      </Link>
                                    )
                                  })
                                  : null
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="service-newResOpen">
                <div className="service-newResOpen-header">
                    <div className="service-newResOpen-label">?????? ?????????</div>
                    <div className="service-newResOpen-sublabel">???????????? ?????? ????????? ???????????? ???????????????</div>
                </div>
                
                <div className="service-newResOpen-body">
                    <div className="service-newResOpen-container">
                        <div className="v-scroll-inner">
                            <div className="service-newResOpen-contents">
                                {

                                  state.barList.length !== 0 ? 
                                  state.barList.reverse().map((el) => {
                                    return (
                                    <Link to="/jazzbar" key={el.id} className="service-newResOpen-object" onClick={()=> goJazzbar(el)}>
                                        <a className="service-newResOpen-object-photobox" >
                                            <div className="service-newResOpen-object-img"  style={{"background-image" : "url("+el.thumbnail+")"}}></div>
                                        </a>
                                        <div className="service-newResOpen-object-footer" >
                                            <div className="newResOpen-object-footer-name" >{el.barName}</div>
                                            <span className="newResOpen-object-footer-tags" >{el.area}</span>
                                            <div className="newResOpen-object-footer-meta" >
                                                <span className="newResOpen-object-footer-star" >???</span>
                                                <span className="newResOpen-object-footer-score" >{el.rating}</span>
                                            </div>
                                        </div>
                                    </Link>
                                      
                                    )
                                  })
                                  :
                                  null
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      </div>
  )
}

export default Service;