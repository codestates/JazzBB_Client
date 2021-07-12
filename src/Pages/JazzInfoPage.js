import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setList, modifySwitch, setBoard} from "../Components/redux/new/action";
import "../css/infobbs.css"




function JazzInfo () {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  axios.get(process.env.REACT_APP_DB_HOST + 'boardRead')
   .then(res => {
     const list = res.data.data.list;
     dispatch(setList(list, 'boardList'));
   });


  const setPosting = (posting) => {
    let currentBoardIdx = state.boardList.indexOf(posting);
    dispatch(setBoard(currentBoardIdx));
    dispatch(modifySwitch('boardModal'));
  }
  
  const closeModal = () => {
    dispatch(modifySwitch('boardModal'));
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
                <div className="infobbs-data-object" onClick={()=>setPosting(el)}>
                  <div className="infobbs-data-object-thumbnail">
                    <img className="infobbs-data-object-thumbnail-img" src={el.boardThumbnail} />
                  </div>
                  <div className="infobbs-data-object-footer">
                    <div className="infobbs-data-object-footer-label">{el.boardTitle}</div>
                    <div className="infobbs-data-object-footer-info">{el.boardContent.length > 15 ? `${el.boardContent.slice(0,14)}...` : el.boardContent}</div>
                  </div>
                </div>
              })
            }

          </div>
          
          {/* <Modal isOpen={state.togle.boardModal} onRequestClose={() => closeModal()}>

          </Modal> */}

        </div>
      </div>
    </div>
  )
}

export default JazzInfo;