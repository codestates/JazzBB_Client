/*global kakao */
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import InfoUpdate from "./InfoUpdate";
import "./BInfoManagePage.css";
import { setBossJazzBar, setToken } from "../../redux/new/action";
// import sss from "../RvManage.css"
const { kakao } = window;
function BInfoManagePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(process.env.REACT_APP_DB_HOST + "/jazzbarRead").then((res) => {
      const list = res.data.data;
      dispatch(setBossJazzBar(list));
    });
  }, []);
  //주석 삭제 하면 안됨 !!!!!!!!!!!!!!
  //재즈바 id 받아오기 !!!!!!!!!!!!!!!!!!!!!!
  const barList = useSelector((state) => state.reducer.barList);
  const Jazz = useSelector((state) => state.reducer.jazzbar);
  const JazzBarInfo = barList.filter((el) => el.jazzBarId === "jazzId");
  const [gps, setGps] = useState("");
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
      state.addressFront === undefined ||
      state.addressETC === undefined ||
      state.barName === undefined ||
      state.defaultSeat === undefined ||
      state.mobile === undefined ||
      state.addressFront === "" ||
      state.addressETC === "" ||
      state.barName === "" ||
      state.defaultSeat === "" ||
      state.mobile === ""
    ) {
      alert("모든 항목을 입력해주세요.");
    } else {
      setState({
        ...state,
        serviceOption: serviceitem,
        // area : `${area[0]+area[1]}`,
        address: state.addressFront + " " + state.addressETC,
        thumbnail: [{ menu: state.menuPhoto }, { banner: state.bannerPhoto }],
        gpsX: gps.gpsX,
        gpsY: gps.gpsY,
      });
      // })
      axios
        .post(process.env.REACT_APP_DB_HOST + "/jazzbarCreate", state)
        .then((res) => {
          console.log(state, "2");
          window.location.href = "/boss/main";
        });
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
      {Jazz.length === 0 ? (
        <div>
          {/* <Sidebar></Sidebar> */}
          <div className="contentBox">
            <div className="ctBoxheader">
              <div className="ctBoxheader-title">매장 정보 입력</div>
              <div className="ctBoxheader-subtitle">
                재즈바바에 가입해 주셔서 감사합니다. 가맹점 관련 메뉴는 매장
                정보를 등록한 뒤 이용하실 수 있습니다
              </div>
            </div>

            <div className="ctBoxBody">
              <div className="barName boxopt">
                <div className="inputformlabel">상호명</div>
                <input
                  className="inputbarname"
                  placeholder="매장 상호명"
                  type="text"
                  name="barName"
                  onChange={handleInput}
                ></input>
              </div>

              <div className="area boxopt">
                <div className="inputformlabel">소재지</div>
                <div className="barlocation">
                  <div className="inputbardiv">
                    <input
                      className="inputbarlocation"
                      placeholder="주소"
                      readOnly="true"
                      size="50"
                      defaultValue={
                        state.addressFront !== undefined
                          ? state.addressFront
                          : null
                      }
                    ></input>
                    <input
                      className="inputbarlocationdetail"
                      type="select"
                      name="addressETC"
                      onChange={handleInput}
                      placeholder="상세 주소"
                    ></input>
                  </div>
                  <button
                    className="locationbtn"
                    type="button"
                    onClick={openPostCode}
                  >
                    우편번호 검색
                  </button>
                  <div id="popupDom">
                    {isPopupOpen && (
                      <PopupDom>
                        <PopupPostCode
                          onClose={closePostCode}
                          setGps={setGps}
                          state={state}
                          setState={setState}
                        />
                      </PopupDom>
                    )}
                  </div>
                </div>
              </div>

              <div className="barMobile boxopt">
                <div className="inputformlabel">연락처</div>
                <div className="phoneWrapper">
                  <input
                    className="phoneform"
                    placeholder="매장 연락처"
                    type="number"
                    name="mobile"
                    onChange={handleInput}
                  ></input>
                  <div className="phonelabel">
                    숫자만 입력해주세요. 예) 01012341234
                  </div>
                </div>
              </div>

              <div className="defaultSeat boxopt">
                <div className="inputformlabel">좌석수</div>
                <input
                  className="seatform"
                  placeholder="매장 좌석 수"
                  type="number"
                  name="defaultSeat"
                  onChange={handleInput}
                ></input>
              </div>

              <div className="serviceOption boxopt">
                <div className="inputformlabel">서비스</div>

                {service.map((el) => (
                  <div className="svcdiv">
                    <input
                      className="svcoptcheck"
                      type="checkbox"
                      name="serviceOption"
                      checked={serviceitem.el}
                      id={el}
                      onChange={handleInput}
                    />
                    <div className="svcoptel">{el}</div>
                  </div>
                ))}
              </div>

              <div className="Menu boxopt">
                <div className="inputmenu-header">
                  <div className="inputformlabel">메뉴</div>
                  {/* <FileUpload></FileUpload>
                 <PhotoInputFile></PhotoInputFile> */}
                  <div className="inputformsublabel">
                    최대 5개의 이미지까지 업로드가 가능합니다
                  </div>
                  <input
                    className="add-file"
                    type="file"
                    multiple
                    name="image"
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    onChange={handleImageUpload}
                  />
                </div>

                <div className="inputmenu-body">
                  <img
                    className="add-thumbnail"
                    src={detailImgs[0]}
                    alt="" // onChange={(e) => setFile(e)}
                  ></img>
                  {detailImgs[1] !== undefined ? (
                    <img
                      className="add-thumbnail"
                      src={detailImgs[1]}
                      alt="" // onChange={(e) => setFile(e)}
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
              </div>

              <div className="banner boxopt">
                <div className="banner-header">
                  <div className="inputformlabel">대표이미지</div>
                  <div className="inputformsublabel">
                    1개의 이미지만 업로드가 가능합니다
                  </div>
                  <input
                    type="file"
                    name="image"
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    onChange={handleBannerImg}
                  />
                </div>

                <img
                  className="add-thumbnail"
                  src={bannerDetail}
                  alt=""
                  // onChange={(e) => setFile(e)}
                ></img>
              </div>

              <div className="submit boxopt">
                <button className="submitbtn" onClick={handleSubmit}>
                  매장 등록
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <InfoUpdate data={Jazz}></InfoUpdate>
      )} 
    </div>
  );
}

export default BInfoManagePage;
