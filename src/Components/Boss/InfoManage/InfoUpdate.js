import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { setToken, setBossJazzBar } from "../../redux/new/action";
import {Link} from 'react-router-dom'
import "./infoupdate.css";

//아래 useSelector가 안먹힘. 아마 이 페이지는 오류날듯.
//서버 연결 제대로 되고 나서 수정해야 할 페이지 임.
function InfoUpdate() {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.reducer);
  const barList = useSelector((state) => state.reducer.barList);
  const jazzBarId = useSelector((state) => state.reducer.jazzBarId);
  const bardata = barList.filter((el) => el.id === initialState.jazzBarId);
  let data;
  if (bardata === []) {
    data = null;
  } else {
    data = bardata[0];
  }
  const serviceOption = useSelector((state) => state.reducer.serviceOption);
  const banner = [];
  const menu = useSelector((state) => state.reducer.menu);
  const [editActive, setEdit] = useState(false);
  const [state, setState] = useState(data);
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
  const [alertMsg, setalertMsg] = useState("");
  const [gps, setGps] = useState({ gpsX: data.gpsX, gpsY: data.gpsY });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openAddressEtc, setOpenAddress] = useState(false);
  const openPostCode = () => {
    setIsPopupOpen(true);
    setOpenAddress(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  // const serviceArray = Object.keys(serviceitem);

  useEffect(() => {
    console.log(data)
    if (data.serviceOption !== null) {
      let copy = serviceitem;
      const yap = data.serviceOption.split("");
      yap.map((number) => {
        for (let el of serviceOption) {
          if (number == el.id) {
            return (copy[el.content] = true);
          }
        }
      });
      setService(copy);
      copy = serviceitem;
    }
  }, []);

  // console.log(serviceArray, "serviceArray");
  // console.log(data.serviceOption, "dataserviceOption");
  // console.log(serviceitem, "serviceitem");

  const handleEditActive = () => {
    setEdit(true);
  };

  const [targetFile, setFile] = useState([]); //파일 정보 이름 등등
  const [detailImgs, setDetailImgs] = useState([]); //졸라 긴거

  const handleImageUpload = (e) => {
    let fileArr = e.target.files;
    console.log(fileArr);
    setFile([...fileArr]);

    if (fileArr.length > 5) {
      alert("파일은 5개까지 첨부가 가능합니다.");
      setalertMsg("파일을 5개 이하로 다시 선택해주세요.");
      return false;
    } else {
      setalertMsg("");
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
  const [banners, setBanner] = useState([]);
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

  const handleInput = (e) => {
    const targetName = e.target.name;
    if (targetName === "serviceOption") {
      const {
        target: { checked },
      } = e;
      setService({ ...serviceitem, [e.target.id]: checked });
      console.log(serviceitem);
    } else {
      setState({ ...state, [targetName]: e.target.value });
      console.log(state);
    }
  };

  const handleSubmit = () => {
    console.log(state,'state')
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

      axios.post(
        process.env.REACT_APP_DB_HOST + "/menuCreate",
        {
          authorization: initialState.user.token,
        },
        { state, jazzBarId }
      );
    }
    if (
      state.addressFront === undefined ||
      state.addressETC === undefined ||
      state.barName === undefined ||
      state.defaultSeat === undefined ||
      state.mobile === undefined ||
      state.serviceOption === undefined ||
      state.addressFront === "" ||
      state.addressETC === "" ||
      state.barName === "" ||
      state.defaultSeat === "" ||
      state.mobile === "" ||
      state.serviceOption === ""
    ) {
      alert("모든 항목을 입력해주세요.");
    } else {
      setState({
        ...state,
        serviceOption: serviceitem,
        // area : `${area[0]+area[1]}`,
        address: state.addressFront + " " + state.addressETC,
        thumbnail: state.bannerPhoto,
        gpsX: gps.gpsX,
        gpsY: gps.gpsY,
      });
    }
    axios
      .post(process.env.REACT_APP_DB_HOST + "/jazzbarCreate", state, {
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
      .then(
        axios.post(
          process.env.REACT_APP_DB_HOST + "/menuCreate",
          { state, jazzBarId },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        )
      );
  };

  return (
    <div>
      <Sidebar></Sidebar>
      {jazzBarId === null ? (
        <div className="infowrapper">
          <div className="dummydiv"></div>
          <div className="BIUcontentBox">
            <div className="BIUcontentheader">
              <div className="BIUcontentheader-label">정보수정</div>
              <div className="BIUcontentheader-sublabel">
                등록된 매장 정보가 없습니다.
                <Link to='/infoedit'><button className="btnbtnbtn">매장 정보 등록하기</button></Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="infowrapper">
          <div className="dummydiv"></div>
          <div className="BIUcontentBox">
            <div className="BIUcontentheader">
              <div className="BIUcontentheader-label">정보수정</div>
              <div className="BIUcontentheader-sublabel">
                매장 정보가 변경된 경우 직접 수정하실 수 있습니다. 서비스에 즉시
                반영되는 부분이니 수정에 주의해 주세요
              </div>
            </div>

            <div className="barName boxop">
              <div className="barlabel">상호명</div>
              {editActive ? (
                <input
                  className="barcontents inputform"
                  type="text"
                  defaultValue={data.barName}
                  onChange={handleInput}
                  name="barName"
                ></input>
              ) : (
                <div className="barcontents">{data.barName}</div>
              )}
            </div>

            <div className="barAddress boxop">
              <div className="barlabel">소재지</div>
              {editActive ? (
                <div className="barcontents adrset">
                  <input
                    className="adrform inputform"
                    type="text"
                    defaultValue={data.address}
                    onChange={handleInput}
                    value={state.addressFront}
                    name="address"
                    readOnly
                  ></input>
                  <button
                    className="adrbtn"
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
                  {!!openAddressEtc ? (
                    <input
                      className="inputform"
                      type="text"
                      placeholder="상세주소"
                      name="addressETC"
                      // defaultValue={data.addressETC}
                      onChange={handleInput}
                    ></input>
                  ) : null}
                </div>
              ) : (
                <div className="barcontents">{data.address}</div>
              )}
            </div>

            <div className="barMobile boxop">
              <div className="barlabel">연락처</div>
              {editActive ? (
                <input
                  className="barcontents inputform"
                  type="text"
                  defaultValue={data.mobile}
                  onChange={handleInput}
                  name="mobile"
                ></input>
              ) : (
                <div className="barcontents">{data.mobile}</div>
              )}
            </div>

            <div className="barMobile boxop">
              <div className="barlabel">영업시간</div>
              {editActive ? (
                <input
                  className="barcontents inputform"
                  type="text"
                  defaultValue={data.openTime}
                  onChange={handleInput}
                  name="mobile"
                ></input>
              ) : (
                <div className="barcontents">{data.openTime}</div>
              )}
            </div>

            <div className="defaultSeat boxop">
              <div className="barlabel">좌석수</div>
              {editActive ? (
                <input
                  className="barcontents inputform"
                  type="number"
                  defaultValue={data.defaultSeat}
                  onChange={handleInput}
                  name="defaultSeat"
                ></input>
              ) : (
                <div className="barcontents">{data.defaultSeat}</div>
              )}
            </div>

            <div className="serviceOption boxop">
              <div className="barlabel">서비스</div>
              <div className="barcontents">
                <div className="cbarea">
                  {editActive ? (
                    <div className="cbarea2">
                      {serviceOption.map((el) => (
                        <div className="checkboxWrapper">
                          <input
                            className="thisischeckbox"
                            type="checkbox"
                            name="serviceOption"
                            onChange={handleInput}
                            defaultChecked={
                              serviceitem[el.content] === true ? true : false
                            }
                            id={el.content}
                          ></input>
                          <div className="checkinfo">{el.content}</div>
                          <img
                            className="checkicon"
                            src={el.img}
                            alt={el.content}
                          ></img>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="barcontents svclist">
                      {data.serviceOption.split("").map((number) => {
                        for (let el of serviceOption) {
                          if (number == el.id) {
                            return (
                              <span className="shopinfo-iconarea-featureitem">
                                <img
                                  className="shopinfo-iconarea-featureitem-icon"
                                  src={el.img}
                                  alt=""
                                />
                                <span className="shopinfo-iconarea-featureitem-label">
                                  {el.content}
                                </span>
                              </span>
                            );
                          }
                        }
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="changemenu boxop">
              <div className="barlabel">메뉴</div>
              <div className="barcontents">
                {editActive ? (
                  <div>
                    <input
                      className="add-file"
                      type="file"
                      multiple
                      max="5"
                      name="image"
                      accept="image/jpg,image/png,image/jpeg,image/gif"
                      onChange={handleImageUpload}
                    ></input>
                    <div>{alertMsg}</div>
                    {detailImgs.map((el) => (
                      <img
                        className="add-thumbnail"
                        src={el}
                        alt="" // onChange={(e) => setFile(e)}
                      ></img>
                    ))}
                  </div>
                ) : menu.length !== 0 ? (
                  menu.map((el) => (
                    <img className="menuthumbnail" src={el.thumbnail} alt="" />
                  ))
                ) : (
                  <h4>등록된 이미지가 없습니다.</h4>
                )}
              </div>
            </div>

            <div className="changebanner boxop">
              <div className="barlabel">대표이미지</div>
              <div className="barcontents">
                {
                  editActive ? (
                    <div>
                      <input
                        className="add-file"
                        type="file"
                        name="image"
                        accept="image/jpg,image/png,image/jpeg,image/gif"
                        onChange={handleBannerImg}
                      ></input>

                      <img
                        className="add-thumbnail"
                        src={bannerDetail}
                        alt=""
                        // onChange={(e) => setFile(e)}
                      ></img>
                    </div>
                  ) : (
                    // banners.length !== 0 ? (
                    // banners.map((el) => (
                    <img
                      className="bannerthumbnail"
                      src={data.thumbnail}
                      alt=""
                    />
                  )
                  // ))
                  // ) : (
                  //   <h4>등록된 이미지가 없습니다.</h4>
                  // )
                }
              </div>
            </div>
            {editActive ? (
              <button
                className="btnbtnbtn"
                onClick={handleSubmit}
                onSubmit={null}
              >
                저장
              </button>
            ) : (
              <button
                className="btnbtnbtn"
                onClick={handleEditActive}
                info={data}
              >
                정보수정
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoUpdate;
