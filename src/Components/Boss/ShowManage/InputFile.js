import React, { useState, useEffect } from "react";
import "./ShowManage.css";

//img url 생성과 state에 set해주는 기능 필요.

function AddShowInput({ imgFile, setImgFile, data }) {
  const [imgBase64, setImgBase64] = useState("");

  useEffect(()=>{
    if(data !== null ){
      if(data.thumbnail){
        setImgBase64(data.thumbnail)
      }
    }
  },[])


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
        setImgBase64(base64.toString());
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  
  return (
    <div className="add-body">
      <div className="add-contents">
        <div className="add-left">
          <div className="add-thumbnail-Wrapper">
            {imgBase64 ? ( // 공연 썸네일 첨부
              <div className="add-thumbnail-preview">
                <img
                  className="add-thumbnail"
                  src={imgBase64}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShowInput;
