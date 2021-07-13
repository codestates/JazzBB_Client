/*global kakao */
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useSelector } from "react-redux";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import InfoUpdate from "./InfoUpdate";
// import sss from "../RvManage.css"
import FileUpload from "./FileUpload";
import PhotoInputFile from "./PhotoInputFIle";
const { kakao } = window;

function BInfoManagePage() {
  //주석 삭제 하면 안됨 !!!!!!!!!!!!!!
  //재즈바 id 받아오기 !!!!!!!!!!!!!!!!!!!!!!
  const barList = useSelector((state) => state.reducer.barList);
  const JazzBarInfo = barList.filter((el) => el.jazzBarId === "jazzId");

  //좌표 변경하는 코드. (서버 연결 후 주석 해제 필요)
  // let container = document.getElementById("map");
  // var geocoder = new kakao.maps.services.Geocoder();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const [serviceitem, setService] = useState({
    주차가능: false,
    발렛주차: false,
    단체석: false,
    개별룸: false,
    식사가능: false,
    콜키지가능: false,
    심야영업: false,
    온라인예약가능: false,
  });

  const service = Object.keys(serviceitem);
  const [state, setState] = useState({});
  const handleInput = (e) => {
    const targetName = e.target.name;
    if (targetName === "serviceOption") {
      const {
        target: { checked },
      } = e;
      setService({ ...serviceitem, [e.target.id]: checked });
    } else {
      setState({ ...state, [targetName]: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (banner.length !== 0) {
      const formDataBanner = new FormData();
      formDataBanner.append(`bannerImg`, banner[0]);
      setState({ ...state, bannerPhoto: formDataBanner });
    }
    if (targetFile.length !== 0) {
      const formData = new FormData();
      for (let i = 0; i < targetFile.length; i++) {
        formData.append(`image${i}`, targetFile[i]);
      }
      setState({ ...state, menuPhoto: formData });
    }

    if (
      state.address === undefined ||
      state.barName === undefined ||
      state.defaultSeat === undefined ||
      state.area === undefined ||
      state.mobile === undefined ||
      state.address === "" ||
      state.barName === "" ||
      state.defaultSeat === "" ||
      state.area === "" ||
      state.mobile === ""
    ) {
      alert("모든 항목을 입력해주세요.");
    } else {
      // geocoder.addressSearch(state.addressFront, function(result, status) {
      //   // 정상적으로 검색이 완료됐으면
      //    if (status === kakao.maps.services.Status.OK) {
      //       var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      //   }
      setState({
        ...state,
        serviceOption: serviceitem,
        address: state.addressFront + " " + state.addressETC,
        thumbnail: [{ menu: state.menuPhoto }, { banner: state.bannerPhoto }],
        // gpsX : result[0].x,
        // gpsY : result[0].y
      });
      // })
      axios
        .post(process.env.REACT_APP_DB_HOST + "/jazzbarCreate", state)
        .then((res) => console.log(res));
      //서버 연결 후, 페이지 이동하는 코드 작성하기
    }
  };

  // const handleUpload = (e) => {
  //   //강의
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", e.target.image.files[0]);
  //   formData.append("title", e.target.title.value[0]);
  //   axios.post("/upload", formData);
  // };

  const [targetFile, setFile] = useState([]); //파일 정보 이름 등등
  const [detailImgs, setDetailImgs] = useState([]); //졸라 긴거

  const [banner, setBanner] = useState([]);
  const [bannerDetail, setBannerDetail] = useState([]);

  const handleBannerImg = (e) => {
    const BannerArr = e.target.files;
    setBanner([...BannerArr]);
    let fileURLs = [];
    let file = BannerArr[0];

    let reader = new FileReader();
    reader.onload = () => {
      fileURLs[0] = reader.result;
      setBannerDetail([...fileURLs]);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    const fileArr = e.target.files;
    setFile([...fileArr]);

    if (fileArr.length > 5) {
      alert("파일은 5개까지 첨부가 가능합니다.");
    } else {
      let fileURLs = [];
      let file;
      let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

      for (let i = 0; i < filesLength; i++) {
        file = fileArr[i];

        let reader = new FileReader();
        reader.onload = () => {
          fileURLs[i] = reader.result;
          setDetailImgs([...fileURLs]);
        };
        reader.readAsDataURL(file);
      }
    }
  };
  return (
    //회원가입 후 재즈바 인포 없을 시 렌더될 페이지. 그 후에는 infoUpdate 가 열림.
    <div className="infoPage">
      {JazzBarInfo.length === 0 ? (
        <div>
          {/* <Sidebar></Sidebar> */}
          <div className="contentBox">
            <h1>정보 기입</h1>

            <div className="barName">
              {/* <div>재즈바 이름</div> */}
              <input
                placeholder="재즈바 상호명"
                type="text"
                name="barName"
                onChange={handleInput}
              ></input>
            </div>

            <div className="area">
              {/* <div>가게 주소</div> */}
              <div>
                <select
                  className="select-search-location"
                  onChange={handleInput}
                  name="area"
                >
                  <option value="" disabled selected>
                    재즈바 지역 선택
                  </option>
                  <option value="서울">서울특별시</option>
                  <option value="경기">경기도</option>
                  <option value="강원">강원도</option>
                  <option value="대전">대전광역시</option>
                  <option value="충북">충청북도</option>
                  <option value="충남">충청남도</option>
                  <option value="광주">광주광역시</option>
                  <option value="전북">전라북도</option>
                  <option value="전남">전라남도</option>
                  <option value="대구">대구광역시</option>
                  <option value="경북">경상북도</option>
                  <option value="경남">경상남도</option>
                  <option value="울산">울산광역시</option>
                  <option value="부산">부산광역시</option>
                  <option value="제주">제주특별자치도</option>
                </select>
                <input
                  placeholder="주소"
                  readOnly="true"
                  size="50"
                  defaultValue={
                    state.addressFront !== undefined ? state.addressFront : null
                  }
                ></input>
                <button type="button" onClick={openPostCode}>
                  우편번호 검색
                </button>
                <div id="popupDom">
                  {isPopupOpen && (
                    <PopupDom>
                      <PopupPostCode
                        onClose={closePostCode}
                        state={state}
                        setState={setState}
                      />
                    </PopupDom>
                  )}
                </div>
              </div>
              <input
                type="select"
                name="addressETC"
                onChange={handleInput}
                placeholder="상세 주소"
              ></input>
            </div>

            <div className="barMobile">
              {/* <div>가게 전화번호</div> */}
              <div>숫자만 입력해주세요. 예) 01012341234</div>
              <input
                placeholder="재즈바 연락처"
                type="number"
                name="mobile"
                onChange={handleInput}
              ></input>
            </div>

            <div className="defaultSeat">
              <input
                placeholder="가게 좌석 수"
                type="number"
                name="defaultSeat"
                onChange={handleInput}
              ></input>
            </div>

            <div className="serviceOption">
              <div>serviceOption</div>
              {service.map((el) => (
                <div>
                  <input
                    type="checkbox"
                    name="serviceOption"
                    checked={serviceitem.el}
                    id={el}
                    onChange={handleInput}
                  />
                  <div>{el}</div>
                </div>
              ))}
            </div>

            <div className="Menu">
              <div>재즈바 메뉴판 사진 (최대 5장)</div>
              {/* <FileUpload></FileUpload>
             <PhotoInputFile></PhotoInputFile> */}
              <input
                type="file"
                multiple
                name="image"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={handleImageUpload}
              />
              <img
                className="add-thumbnail"
                src={detailImgs[0]}
                alt=""
                // onChange={(e) => setFile(e)}
              ></img>
              {detailImgs[1] !== undefined ? (
                <img
                  className="add-thumbnail"
                  src={detailImgs[1]}
                  alt=""
                  // onChange={(e) => setFile(e)}
                ></img>
              ) : null}

              {detailImgs[2] !== undefined ? (
                <img
                  className="add-thumbnail"
                  src={detailImgs[2]}
                  alt=""
                  // onChange={(e) => setFile(e)}
                ></img>
              ) : null}

              {detailImgs[3] !== undefined ? (
                <img
                  className="add-thumbnail"
                  src={detailImgs[3]}
                  alt=""
                  // onChange={(e) => setFile(e)}
                ></img>
              ) : null}
              {detailImgs[4] !== undefined ? (
                <img
                  className="add-thumbnail"
                  src={detailImgs[4]}
                  alt=""
                  // onChange={(e) => setFile(e)}
                ></img>
              ) : null}
              {/* <form action="/upload" method="post" encType="multipart/form-data"> 
               <input type="file" name="image" multiple></input>
               <input type="text" name="title" ></input>
               <button type="submit" onClick={handleUpload}>업로드</button>
             </form> */}
            </div>

            <div className="banner">
              <div>재즈바 배너 사진</div>
              <input
                type="file"
                multiple
                name="image"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={handleBannerImg}
              />
              <img
                className="add-thumbnail"
                src={bannerDetail}
                alt=""
                // onChange={(e) => setFile(e)}
              ></img>
            </div>
            <button onClick={handleSubmit}>등록</button>
          </div>
        </div>
      ) : (
        <InfoUpdate data={JazzBarInfo}></InfoUpdate>
      )}
    </div>
  );
}

export default BInfoManagePage;
