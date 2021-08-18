import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { setList, typeText, modifySwitch, setToken, setBoard, saveThisHistory, setCurrentPage } from "../Components/redux/new/action";
import "../css/JazzinfoPosting.css";


function BoardPostingObject () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const stateReviewList = useSelector(state => state.reducer.reviewList);
  
  useEffect(async ()=>{
    dispatch(saveThisHistory())
    dispatch(setCurrentPage(window.location.pathname))
    await axios.post(process.env.REACT_APP_DB_HOST + '/reviewRead', {boardId: state.currentBoard})
    .then(res => {
      const reviewList = res.data.data;
      dispatch(setList(reviewList, 'reviewList'));
    })
    .catch(err => console.log(err))
  }, [])
  
  
  const changeCurrentBoard = (type) => {
    let currentNumber = state.currentBoard;
    if(type == 1){
      dispatch(setBoard(currentNumber - 1));
    } else if(type == 2){
      dispatch(setBoard(currentNumber + 1));
    }
  }
  
  const typingReview = (e, variety) => {
    dispatch(typeText(e.target.value, variety));
  }
  
  const reviewPost = async () => {
    if(!state.isLogin) {
      alert('로그인 후 리뷰 작성이 가능합니다.');
      dispatch(modifySwitch('loginModal'));
    } else {
      // console.log(state.user)
      await axios.post(process.env.REACT_APP_DB_HOST + '/reviewCreate',{
        boardId: state.currentBoard, 
        point: '5', 
        content: state.review.content
      }, { headers: { authorization: state.token }, withCredentials: true })
      .then(res => {
        const token = res.data.data.accessToken;
        dispatch(setToken(token));
      })
      .catch(err => console.log(err))

      await axios.post(process.env.REACT_APP_DB_HOST + '/reviewRead', {boardId: state.currentBoard})
       .then(res => {
         const reviewList = res.data.data;
         dispatch(setList(reviewList, 'reviewList'));
         typingReview({target:{value:''}}, 'content')
       })
       .catch(err => console.log(err))
    }
  }

  return (
    <div className="infobbsdataentry">

      <div className="infobbsdataentry-body">
        <div className="infobbsdataentry-body-header">
          <div className="infobbsdataentry-body-header-labelwrapper">
            <div className="infobbsdataentry-body-header-label">재즈바바가 들려주는 재즈 이야기</div>
            <div className="infobbsdataentry-body-header-sublabel">재즈가 익숙하지 않아도 걱정하지 마세요! 재즈바바가 알려드릴게요 :)</div>
          </div>

            <Link to={state.history[0]}>        
          <div className="infobbsdataentry-body-header-btnwrapper">
              <img className="infobbsdataentry-control-icon" src="/resource/outline_arrow_back_ios_black_24dp.png" />
              <div className="infobbsdataentry-control-label">이전 페이지</div>
          </div>
          </Link>
        </div>

        <div className="infobbsdataentry-control">
          <div className="infobbsdataentry-control-container">
            {
              state.boardList.find(el => el.id === state.currentBoard-1) ?
              <div className="infobbsdataentry-control-wrapper" onClick={()=>changeCurrentBoard(1)}>
                <div className="infobbsdataentry-control-btns">
                  <img className="infobbsdataentry-control-icon" src="/resource/outline_arrow_back_ios_black_24dp.png" />
                  <div className="infobbsdataentry-control-label">이전글</div>    
                </div>

                <div className="infobbsdataentry-control-title">{state.boardList.find(el => el.id === state.currentBoard-1).title}</div>
              </div>
              :
              <div className="infobbsdataentry-control-wrapper">
                <div className="infobbsdataentry-control-title">첫 글입니다</div>
              </div>

            }

            
            <div className="infobbsdataentry-control-btnWrapper-list">
            <Link to="/board">
              <img className="infobbsdataentry-control-btnWrapper-listicon" src="/resource/outline_list_black_24dp.png" />
                <div className="infobbsdataentry-control-btnWrapper-listlabel">목록보기</div>
              </Link>
            </div>
            {
              state.boardList.find(el => el.id === state.currentBoard+1) ? 
              <div className="infobbsdataentry-control-wrapper" onClick={()=> changeCurrentBoard(2)}>
                <div className="infobbsdataentry-control-title">{state.boardList.find(el => el.id === state.currentBoard+1).title}</div>

                <div className="infobbsdataentry-control-btns">
                  <img className="infobbsdataentry-control-icon" src="/resource/outline_arrow_forward_ios_black_24dp.png" />
                  <div className="infobbsdataentry-control-label">다음글</div>    
                </div>
              </div>     
              :
              <div className="infobbsdataentry-control-wrapper">
                <div className="infobbsdataentry-control-title">마지막 글입니다</div>
              </div>     
            }

          </div>
        </div>


        <div className="infobbsdataentry-body-data">
          <div className="infobbsdataentry-body-data-header">
            <div className="infobbsdataentry-body-data-header-label">{state.boardList.find(el => el.id === state.currentBoard).title}</div>
            <div className="infobbsdataentry-body-data-header-createdAt">{state.boardList.find(el => el.id === state.currentBoard).createdAt}</div>
          </div>

          <div className="infobbsdataentry-body-data-thumbnail">
            {
              state.boardList.find(el => el.id === state.currentBoard).thumbnail ? 
              <img className="infobbsdataentry-body-data-thumbnail-img" src={state.boardList.find(el => el.id === state.currentBoard).thumbnail} />
              :
              null
            }
          </div>
          <table className="infobbsdataentry-body-data-infobody">
            <tr>
              {state.boardList.find(el => el.id === state.currentBoard).content.split('<br>').map(el => {
              return (<span>{el}<br/></span>)
            })
              }
            </tr>
          </table>


          <div className="infobbsdataentry-body-data-commentWrapper">
            <div className="infobbsdataentry-body-data-commentlabel">댓글</div>
            <div className="infobbsdataentry-body-data-comment">
              {
                stateReviewList ? stateReviewList.map(el => {
                  return state.user && el.user.username === state.user.username ?
                  (
                    <div className="infobbsdataentry-body-data-commentcontainer">
                      <div className="comment-name">{el.user.username}</div>
                      <div className="comment-comment">{el.content}</div>
                    </div>
                  ) : (
                    <div className="infobbsdataentry-body-data-commentcontainer">
                      <div className="comment-name">{el.user.username}</div>
                      <div className="comment-comment">{el.content}</div>
                    </div>
                  )
                })
                :
                null
              }

            </div>

            <div className="infobbsdataentry-body-data-newcomment">
              <div className="newcomment-label">댓글 작성</div>
              <input className="newcomment-comment" type="text" onChange={(e)=> typingReview(e, 'content')} value={state.review ? state.review.content : ''}/>
              <button className="newcomment-submitbtn" onClick={()=> reviewPost()}>작성</button>
            </div>
                        
          </div>

        </div>

      </div>

    </div>
  )
}

export default BoardPostingObject;