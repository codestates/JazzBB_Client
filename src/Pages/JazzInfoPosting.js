import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { setList, typeText, modifySwitch, setToken, setBoard} from "../Components/redux/new/action";
import "../css/JazzinfoPosting.css";


function BoardPostingObject () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);

  let previousBoard = state.boardList[state.currentBoard - 1];
  let currentBoard = state.boardList[state.currentBoard];
  let nextBoard = state.boardList[state.currentBoard + 1];

  axios.get(process.env.REACT_APP_DB_HOST + '/reviewRead', {boardId: currentBoard.id})
   .then(res => {
    const reviewList = res.data.data.list;
    dispatch(setList(reviewList, 'reviewList'));
   })
   .catch(err => console.log(err))

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
    if(!state.user.isLogin) {
      alert('로그인 후 리뷰 작성이 가능합니다.');
      dispatch(modifySwitch('loginModal'));
    } else {
      await axios.post(process.env.REACT_APP_DB_HOST + '/reviewCreate', {
        authorization: state.user.token
      },{
        boardId: currentBoard.id, 
        point: '5', 
        content: state.review.content
      })
       .then(res => {
        const token = res.data.data.accessToken;
        dispatch(setToken(token));
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
                    
          <div className="infobbsdataentry-body-header-btnwrapper">
            <img className="infobbsdataentry-control-icon" src="/resource/outline_arrow_back_ios_black_24dp.png" />
            <div className="infobbsdataentry-control-label">이전 페이지</div>
          </div>
        </div>

        <div className="infobbsdataentry-control">
          <div className="infobbsdataentry-control-container">
            {
              previousBoard ?
              <div className="infobbsdataentry-control-wrapper" onClick={()=>changeCurrentBoard(1)}>
                <div className="infobbsdataentry-control-btns">
                  <img className="infobbsdataentry-control-icon" src="/resource/outline_arrow_back_ios_black_24dp.png" />
                  <div className="infobbsdataentry-control-label">이전글</div>    
                </div>

                <div className="infobbsdataentry-control-title">{previousBoard.title}</div>
              </div>
              :
              <div className="infobbsdataentry-control-wrapper">
                <div className="infobbsdataentry-control-title">첫 글입니다</div>
              </div>

            }

            <div className="infobbsdataentry-control-btnWrapper-list">
              <img className="infobbsdataentry-control-btnWrapper-listicon" src="/resource/outline_list_black_24dp.png" />
              <Link to="/board">
                <div className="infobbsdataentry-control-btnWrapper-listlabel">목록보기</div>
              </Link>
            </div>
            {
              nextBoard ? 
              <div className="infobbsdataentry-control-wrapper" onClick={()=> changeCurrentBoard(2)}>
                <div className="infobbsdataentry-control-title">{nextBoard.title}</div>

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
            <div className="infobbsdataentry-body-data-header-label">{currentBoard.title}</div>
            <div className="infobbsdataentry-body-data-header-createdAt">{currentBoard.createdAt}</div>
          </div>

          <div className="infobbsdataentry-body-data-thumbnail">
            {
              currentBoard.thumbnail ? 
              <img className="infobbsdataentry-body-data-thumbnail-img" src={currentBoard.thumbnail} />
              :
              null
            }
          </div>
          <table className="infobbsdataentry-body-data-infobody">
            <tr>
              {currentBoard.content}
            </tr>
          </table>


          <div className="infobbsdataentry-body-data-commentWrapper">
            <div className="infobbsdataentry-body-data-commentlabel">댓글</div>
            <div className="infobbsdataentry-body-data-comment">
              {
                state.reviewList.map(el => {
                  return (
                    <div className="infobbsdataentry-body-data-commentcontainer">
                      <div className="comment-name">{el.user.username}</div>
                      <div className="comment-comment">{el.content}</div>
                    </div>
                  )
                })
              }

            </div>

            <div className="infobbsdataentry-body-data-newcomment">
              <div className="newcomment-label">댓글 작성</div>
              <input className="newcomment-comment" type="text" onChange={(e)=> typingReview(e, 'content')}/>
              <button className="newcomment-submitbtn" onClick={()=> reviewPost()}>작성</button>
            </div>
                        
          </div>

        </div>

      </div>

    </div>
  )
}

export default BoardPostingObject;