import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { setList, modifySwitch, setBoard, dequeueHistory, saveThisHistory, setCurrentPage } from "../Components/redux/new/action";
import "../css/infobbs.css"
import Posting from "./JazzInfoPosting";




function JazzInfo () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  useEffect(()=>{
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
    // axios.get(process.env.REACT_APP_DB_HOST + 'boardRead')
    //  .then(res => {
    //    const list = res.data.data.list;
    //    dispatch(setList(list, 'boardList'));
    //  });
  }, [])



  const setPosting = (posting) => {
    let currentBoardIdx = state.boardList.indexOf(posting);
    dispatch(setBoard(currentBoardIdx));
  }


  

  return (
    <div className="app-body">

      <div className="infobbs">
        <div className="infobbs-body">

          <div className="infobbs-header">
            <div className="infobbs-header-label">재즈바바가 들려주는 재즈 이야기</div>
            <div className="infobbs-header-sublabel">재즈가 익숙하지 않아도 걱정하지 마세요! 재즈바바가 알려드릴게요 :)</div>
          </div>

          <div className="infobbs-data">
            {
              state.boardList.map(el => {
                return(
                  <Link to="/posting" onClick={()=>setPosting(el)}>
                    <div className="infobbs-data-object">
                      <div className="infobbs-data-object-thumbnail">
                        <img className="infobbs-data-object-thumbnail-img" src={el.thumbnail} />
                      </div>
                      <div className="infobbs-data-object-footer">
                        <div className="infobbs-data-object-footer-label">{el.title.length > 10 ? `${el.title.slice(0,14)}...` : el.title}</div>
                        <div className="infobbs-data-object-footer-info">{el.content.length > 15 ? `${el.content.slice(0,14)}...` : el.content}</div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default JazzInfo;