/*global kakao */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import "./BInfoManagePage.css";
import { setBossJazzBar, setToken, setJazzId } from "../../redux/new/action";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
};

//menu 사진 기능 테스트할 때, 105번 주석 풀어야 함.
function BInfoManagePage() {
  const dispatch = useDispatch();
  const initialState = useSelector((initstate) => initstate.reducer);
  const jazzbarId = useSelector((initstate) => initstate.reducer.jazzBarId);
  const serviceOption = useSelector(
    (initstate) => initstate.reducer.serviceOption
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [serviceitem, setService] = useState([]);
  const [initstate, setInitState] = useState({});
  let history = useHistory();
  useEffect(() => {
    axios.get(process.env.REACT_APP_DB_HOST + "/jazzbarRead").then((res) => {
      const jazzbarList = res.data.data;
      const jazzbardata = jazzbarList.filter((el) => el.id === jazzbarId);
      if (jazzbardata.length !== 0) {
        <Redirect to="/infoupdate"></Redirect>;
      } else {
        dispatch(setBossJazzBar(jazzbardata[0]));
      }
    });
  }, []);

  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const handleInput = (e) => {
    const targetName = e.target.name;
    const targetId = e.target.id;

    if (targetName === "serviceOption") {
      const {
        target: { checked },
      } = e;
      setService({ ...serviceitem, [e.target.id]: checked });
    } else if (targetName === "openTime") {
      if (targetId === "open") {
        setInitState({ ...initstate, [targetId]: e.target.value });
      } else if (targetId === "close") {
        setInitState({ ...initstate, [targetId]: e.target.value });
      }
    } else {
      setInitState({ ...initstate, [targetName]: e.target.value });
    }
  };

  const handleSubmit = () => {
    let temp = "";
    if (serviceitem !== []) {
      for (let service in serviceitem) {
        if (serviceitem[service] === true) {
          temp = temp + service;
        }
      }
    }

    if (
      initstate.addressFront === undefined ||
      initstate.addressETC === undefined ||
      initstate.barName === undefined ||
      initstate.defaultSeat === undefined ||
      initstate.mobile === undefined
    ) {
      alert("모든 항목을 입력해주세요.");
    } else {
      const newForm = new FormData();
      newForm.append("thumbnail", banner[0]);
      newForm.append("barName", initstate.barName);
      newForm.append("defaultSeat", initstate.defaultSeat);
      newForm.append("area", initstate.area);
      newForm.append("gpsX", initstate.gpsX);
      newForm.append("gpsY", initstate.gpsY);
      newForm.append(
        "address",
        initstate.addressFront + " " + initstate.addressETC
      );
      newForm.append("serviceOption", temp);
      newForm.append("mobile", initstate.mobile);
      newForm.append("openTime", initstate.open + "-" + initstate.close);
      // for (var form of newForm.entries()) { console.log(form[0]+ ', ' + form[1]); }
      axios
        .post(process.env.REACT_APP_DB_HOST + "/jazzbarCreate", newForm, {
          headers: {
            authorization: initialState.token,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        })
        .then((res) => {
          const token1 = res.data.data.accessToken;
          dispatch(setToken(token1));
          const barId = res.data.data.jazzbarId;
          dispatch(setJazzId(barId));
          return barId;
        })
        .then((barId) => {
          const menuFormData = new FormData();
          for (let i = 0; i < targetFile.length; i++) {
            menuFormData.append(`thumbnail`, targetFile[i]);
          }
          menuFormData.append(`jazzbarId`, barId);

          axios
            .post(process.env.REACT_APP_DB_HOST + "/menuCreate", menuFormData, {
              headers: {
                authorization: initialState.token,
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            })
            .then((res) => {
              const token = res.data.data.accessToken;
              dispatch(setToken(token));
            });
        })
        .then((res) => {
          history.push("/boss/main");
        });
    }
  };

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
          setDetailImgs([...detailImgs, ...fileURLs]);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const photoDelete = (e) => {
    let number = e.target.name;
    if(number === "banner"){
      setBanner([])
      setBannerDetail([])
    setInitState({ ...initstate, banner: [] });

    }else{
      let array = detailImgs;
    let File = targetFile;
    array.splice(number, 1);
    File.splice(number, 1);
    setFile(File);
    setDetailImgs(array);
    setInitState({ ...initstate, menu: File });
    }
  };

  const photoDrop = (e) => {
    console.log(e.dataTransfer)
  }

  return (
    //회원가입 후 재즈바 인포 없을 시 렌더될 페이지. 그 후에는 infoUpdate 가 열림.
    <div className="infoPage">
      {/* <Sidebar></Sidebar> */}
      {/* {Jazz === [] ? ( */}
      <div className="infobody">
        <div className="BIMcontentBox">
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
                      initstate.addressFront !== undefined
                        ? initstate.addressFront
                        : null
                    }
                    onClick={openPostCode}
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
              </div>
              <div id="popupDom">
                  {isPopupOpen && (
                    <PopupDom>
                      <PopupPostCode
                        onClose={closePostCode}
                        state={initstate}
                        setState={setInitState}
                      />
                    </PopupDom>
                  )}
                </div>
            </div>

           
            <div className="barMobile boxopt">
              <div className="inputformlabel">연락처</div>
              <div className="phoneWrapper">
                <input
                  className="phoneform"
                  placeholder="매장 연락처"
                  type="tel"
                  name="mobile"
                  onChange={handleInput}
                  autocomplete="off"
                  pattern="[0-9]{13}"
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

              <div className="opentime boxopt">
                <div className="inputformlabel">영업시간</div>
                <div className="opentimeWrapper">     
                   <>
                <input className ="timeform" id="open" type="time" name="openTime"  onChange={handleInput} ></input>
                ~
                <input className ="timeform" id="close" type="time" name="openTime"  onChange={handleInput} ></input>
                </> 
                 
                </div>
              </div>
            {/* </div> */}

            <div className="serviceOption boxopt">
              <div className="inputformlabel">서비스</div>
              {serviceOption.map((el) => (
                <div className="svcdiv">
                  <input
                    className="svcoptcheck"
                    type="checkbox"
                    name="serviceOption"
                    id={el.id}
                    onChange={handleInput}
                  />
                  {/* <div className="svcopWrapper"> */}
                  <div className="svcoptel">{el.content}</div>
                  <img className="svcopicon" src={el.img} alt=""></img>
                  {/* </div> */}
                </div>
              ))}
            </div>

            <div className="Menu boxopt" onDrop={(e) => console.log(e)} >
              <div className="inputmenu-header">
                <div className="inputformlabel">메뉴</div>
                <div className="inputformsublabel">
                  최대 5개의 이미지까지 업로드가 가능합니다
                </div>
                <div style={styles}>
                  <label className="custom-file-upload">
                    <input
                      type="file"
                      name="thumbnail"
                      accept="image/jpg,image/png,image/jpeg,image/gif"
                      multiple
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                    <i className="fa fa-cloud-upload" /> 파일 선택
                  </label>
                </div>
               
              </div>

              <div className="inputmenu-body" >
                {detailImgs.length !== 0 ? 
                  detailImgs.map((el,idx) => {
                    return (
                      <div class="img-wrap">
                        <button name={idx} className="delBtn" onClick={photoDelete}>
                          x
                        </button>
                        <img
                          className="add-thumbnail"
                          src={el}
                          alt=""
                        ></img>
                      </div>
                    )
                  })
                 : null}
{/* 
                {detailImgs[1] !== undefined ? (
                  <div class="img-wrap">
                    <button name={1} className="delBtn" onClick={photoDelete}>
                    x
                    </button>

                    <img
                      className="add-thumbnail"
                      src={detailImgs[1]}
                      alt=""
                    ></img>
                  </div>
                ) : null}

                {detailImgs[2] !== undefined ? (
                  <div class="img-wrap">
                    <img
                      className="add-thumbnail"
                      src={detailImgs[2]}
                      alt=""
                    ></img>
                    <button name={2} className="delBtn" onClick={photoDelete}>
                    x
                    </button>
                  </div>
                ) : null}

                {detailImgs[3] !== undefined ? (
                  <div class="img-wrap">
                    <img
                      className="add-thumbnail"
                      src={detailImgs[3]}
                      alt=""
                    ></img>
                    <button name={3} className="delBtn" onClick={photoDelete}>
                    x
                    </button>
                  </div>
                ) : null}
                {detailImgs[4] !== undefined ? (
                  <div class="img-wrap">
                    <img
                      className="add-thumbnail"
                      src={detailImgs[4]}
                      alt=""
                    ></img>
                    <button name={4} className="delBtn" onClick={photoDelete}>
                    x
                    </button>
                  </div>
                ) : null} */}
              </div>
            </div>

            <div className="banner boxopt">
              <div className="banner-header">
                <div className="inputformlabel">대표이미지</div>
                <div className="inputformsublabel">
                  1개의 이미지만 업로드가 가능합니다
                </div>
                <div style={styles}>
                  <label className="custom-file-upload">
                    <input
                      type="file"
                      name="image"
                      accept="image/jpg,image/png,image/jpeg,image/gif"
                      multiple
                      onChange={handleBannerImg}
                      style={{ display: "none" }}
                    />
                    <i className="fa fa-cloud-upload" /> 파일 선택
                  </label>
                </div>
              </div>

              {bannerDetail[0] ? (
                <div class="img-wrap">
                  <img
                    className="add-thumbnail"
                    src={bannerDetail}
                    alt=""
                  ></img>
                  <button name="banner" className="delBtn" onClick={photoDelete}>
                    x
                    </button>
                </div>
              ) : null}
            </div>

            <div className="submit boxopt">
              <button className="submitbtn" onClick={handleSubmit}>
                매장 등록
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
       
}

export default BInfoManagePage;
