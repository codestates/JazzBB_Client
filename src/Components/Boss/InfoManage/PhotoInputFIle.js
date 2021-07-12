import React, { useState } from "react";
import axios from "axios";
import "../ShowManage/ShowManage.css";

//img url 생성과 state에 set해주는 기능 필요.

function PhotoInputFile() {
  const [imgBase64, setImgBase64] = useState(""); 
  const [imgFile, setImgFile] = useState(null); 
  const [imageUrl, setImageUrl] = useState(imgBase64);
  
  const setFile = (e) => {
    console.log('setFile')
    if (e.target.files[0]) {
      const img = new FormData();
      console.log(img,'img')

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
    console.log('handleChangeFile')
    console.log(event.target.files,'@@$@$A#')

    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
    //   console.log(base64,"0")
    //   console.log(base64[1],"1")
      if (base64) {
        setImgBase64(base64.toString()); 
        // console.log(imgBase64,'imgBase64imgBase64')
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
    // console.log(imgFile,'imgFile')
     // })
     const formData = new FormData ()
     axios
     .post(process.env.REACT_APP_DB_HOST + "/jazzbarImg", formData, {
       headers : {
         'content-type' : 'multipart/form-data'
       }
     })
     .then((res) => console.log(res)); //To-Do : axios.get으로 등록한 사진 불러서 refresh (방금 등록한 사진 보이게끔.)

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
                multiple
              />

              <div className="add-subtitle">
                사진 크기는 (500 * 500)픽셀로 조정됩니다
              </div>
            </div>
            <button className="add-photo-submit">사진 등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoInputFile;
