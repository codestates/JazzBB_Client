import React, { useState } from "react";
import axios from "axios";
import "./ShowManage.css";

//img url 생성과 state에 set해주는 기능 필요.

function AddShowInput() {
  const [imgBase64, setImgBase64] = useState(""); 
  const [imgFile, setImgFile] = useState(null); 
  const [imageUrl, setImageUrl] = useState(imgBase64);
  const setFile = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
      axios
        .post(process.env.domain + "/upload", img)
        .then((res) => {
          setImageUrl(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
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
                  alt={imgFile.name}
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
                name="imgFile"
                id="imgFile"
                onChange={handleChangeFile}
              />

              <div className="add-subtitle">
                사진 크기는 가로 500px, 
                세로 500px로 조정됩니다
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShowInput;
