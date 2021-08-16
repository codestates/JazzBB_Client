import React, { useState } from "react";
import axios from "axios";
import '../ShowManage/ShowManage.css'
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/new/action";

//img url 생성과 state에 set해주는 기능 필요.
function AddShowInput() {
  const dispatch = useDispatch();
  const [menuImg, setMenuImg] = useState("");
  const initialState = useSelector((state) => state.reducer);
  const [imgFile, setImgFile] =useState('')

  const setFile = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("image", e.target.files[0]);
    }
  };

  const handleChangeFile = (event) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setMenuImg(base64.toString());
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  const handleThumbnail = () =>{
      const formdata = new FormData()
      formdata.append('thumbnail', imgFile[0])
      axios
      .post(process.env.REACT_APP_DB_HOST + "/menuUpdate", formdata, {
        headers: {
          authorization: initialState.token,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((res) => {
        const token1 = res.data.data.accessToken;
        dispatch(setToken(token1));
      })
  }
  

  return (
    <div className="add-body">
      <div className="add-contents">
        <div className="add-left">
          <div className="add-thumbnail-Wrapper">
            {menuImg ? ( // 공연 썸네일 첨부
              <div className="add-thumbnail-preview">
                <img
                  className="add-thumbnail"
                  src={menuImg}
                  alt={imgFile ? imgFile.name : ""}
                  onChange={(e) => setFile(e)}
                ></img>
              </div>
            ) : (
              <div className="add-thumbnail-holder">사진을 업로드해주세요</div>
            )}

            <div className="add-thumbnail-uploadWrapper">
              <input
                className="add-thumbnail-upload"
                type="file"
                name="thumbnail"
                id="imgFile"
                onChange={handleChangeFile}
              />
              <div className="add-subtitle">
                사진 크기는 (500 * 500)픽셀로 조정됩니다
              </div>
            </div>
            <button className="add-photo-submit" onClick={handleThumbnail}>
              사진 등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShowInput;
