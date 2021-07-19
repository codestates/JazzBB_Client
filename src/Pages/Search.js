import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { saveThisHistory, dequeueHistory, search, selectSearchType, saveSearchData, setJazzbar, setList, setBoard, setCurrentPage } from "../Components/redux/new/action";
import Modal from "react-modal";
import "../css/search.css"




function Search () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  useEffect(()=>{
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
    // axios.get(process.env.REACT_APP_DB_HOST + "/jazzbarRead")
    //  .then(res => {
    //    const list = res.data.data;
    //    dispatch(setList(list, 'barList'));
    //  })
  
    // axios.get(process.env.REACT_APP_DB_HOST + "/boardRead")
    //  .then(res => {
    //    const list = res.data.data;
    //    dispatch(setList(list, 'boardList'));
    //  })
  }, [])
  
  
  const clickSearchData = (variety, id) => {
    if(variety == 'posting'){
      dispatch(setBoard(id));
    } else if(variety == 'jazzbar'){
      dispatch(setJazzbar(id))
    }
  }

  const searchBar = (input) => {
    dispatch(search(input));
  }

  const modifySearchType = (type) => {
    dispatch(selectSearchType(type));
  }

  const requestSearch = () => {
    axios.post(process.env.REACT_APP_DB_HOST + state.searchOption, { content: state.search })
     .then(res => {
        const response = res.data.data;
        console.log(response)
        dispatch(saveSearchData(response));
     })
  }


  return (
  <div className="search">
    <div className="search-body">
      <div className="search-body-header">
        <div className="search-body-header-labelwrapper">
          {
            state.searchData ?
            <div className="search-body-header-label">검색결과</div>
            :
            <div className="search-body-header-label">JAZZBARBAR 검색</div>
          }
          <div className="search-body-header-sublabel"></div>
        </div>
        <Link to={state.history[0]} className="search-body-header-btnwrapper">
          <img className="search-control-icon" src="/resource/outline_arrow_back_ios_black_24dp.png" />
          <div className="search-control-label">이전 페이지</div>
        </Link>
      </div>
      <div className="search-body-searchbox">
        <select className='search-body-search-select' onChange={(e) => modifySearchType(e.target.value)}>
          <option value='/searchReview'>리뷰 검색</option>
          <option value='/searchBoard'>게시판 검색</option>
          <option value='/searchJazzbar'>재즈바 검색</option>
          <option value='/searchShow'>공연 검색</option>
        </select>
        <input className="search-body-search" type="text" placeholder={
          state.searchOption == '/searchReview' ?
          "찾고 싶은 리뷰 내용을 검색해보세요!"
          :state.searchOption == '/searchBoard' ?
          "찾고 싶은 게시판의 제목이나 내용을 검색해보세요!"
          :state.searchOption == '/searchJazzbar' ?
          "찾고 싶은 재즈바의 상호명이나 지역을 검색해보세요!"
          :state.searchOption == '/searchShow' ?
          "찾고 싶은 공연의 연주자나 공연 소개 내용을 검색해보세요!"
          : ""
        } onChange={(e)=> searchBar(e.target.value)}/>
        <button className="search-body-searchbtn" onClick={()=> requestSearch()}>검색</button>
      </div>
      {
        state.searchData ?
      <div className="search-body-result">
        {
          state.searchOption == '/searchReview' ?
          state.searchData.map(el => {
            if(!el.boardId){
              return (
              <Link to="/jazzbar" className="search-result-box" onClick={()=> clickSearchData('jazzbar', el.jazzbarId)}>
                <div className="search-result-information">
                  <div className="search-result-info-shopname">{el.point}</div>
                  <div className="search-result-info-phone"></div>
                  <div className="search-result-info-shoplocate"></div>
                  <div className="search-result-info-time">{el.content}</div>
                </div>
              </Link>
              )
            } 
            else if(!el.jazzbarId){
              return (
              <Link to="/posting" className="search-result-box" onClick={()=> clickSearchData('posting', el.boardId)}>
                <div className="search-result-information">
                  <div className="search-result-info-shopname">{el.point}</div>
                  <div className="search-result-info-phone"></div>
                  <div className="search-result-info-shoplocate"></div>
                  <div className="search-result-info-time">{el.content}</div>
                </div>
              </Link>
              )
            }
          }) :
          state.searchOption == '/searchBoard' ?
          state.searchData.map(el => {
            return (
              <Link to="/posting" className="search-result-box" onClick={()=> clickSearchData('posting', el.id)}>
                <div className="search-result-thumbnail">
                  <img className="search-result-thumbnail-img" src={el.thumbnail ? el.thumbnail : "/resouce/jazzbb_logo_black.png"} />
                </div>
                <div className="search-result-information">
                  <div className="search-result-info-shopname">{el.title}</div>
                  <div className="search-result-info-phone"></div>
                  <div className="search-result-info-shoplocate"></div>
                  <div className="search-result-info-time">{el.content.slice(0,10)}</div>
                </div>
              </Link>
            )
          }):
          state.searchOption == '/searchJazzbar' ?
          state.searchData.map(el => {
            return (
              <Link to="/jazzbar" className="search-result-box" onClick={()=> clickSearchData('jazzbar', el.id)}>
                <div className="search-result-thumbnail">
                  <img className="search-result-thumbnail-img" src={el.thumbnail ? el.thumbnail : "/resouce/jazzbb_logo_black.png"} />
                </div>
                <div className="search-result-information">
                  <div className="search-result-info-shopname">{el.barName}</div>
                  <div className="search-result-info-phone">{el.mobile}</div>
                  <div className="search-result-info-shoplocate">{el.area}</div>
                  <div className="search-result-info-time">{el.opentime}</div>
                </div>
              </Link>
            )
          })
          :
          state.searchOption == '/searchShow' ?
          state.searchData.map(async el => {
            const jazzbar = state.barList.find(bar => bar.id == el.jazzbarId);
            return (
              <Link to="/jazzbar" className="search-result-box" onClick={()=> clickSearchData('jazzbar', jazzbar.id)}>
                <div className="search-result-thumbnail">
                  <img className="search-result-thumbnail-img" src={el.thumbnail ? el.thumbnail : jazzbar.thumbnail} />
                </div>
                <div className="search-result-information">
                  <div className="search-result-info-shopname">{jazzbar.barName}</div>
                  <div className="search-result-info-phone">{`${el.showCharge}원`}</div>
                  <div className="search-result-info-shoplocate">{el.player}</div>
                  <div className="search-result-info-time">{`${el.date.replace(/-/g,'.')} ${el.time.split('-')[0]}~${el.time.split('-')[1]}`}</div>
                </div>
              </Link>
            )
          })
          
          :
           ''
        }

      </div>
        : ''
      }
    </div>
  </div>
  )
}

export default Search;