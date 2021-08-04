import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { setToken } from "../../redux/new/action";
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
  console.log(bardata,'bardata')
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
  let searchAddress;
  let detailAddress;
  if(data.address){
    let frontIndex = data.address.lastIndexOf(")")+1
    searchAddress=data.address.substring(0,frontIndex)
    detailAddress = data.address.substring(frontIndex, data.address.length)
  }

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

  const [start, end] = data.openTime.split('-')

  useEffect(() => {
    console.log(data)
  setState({...state, open : start, close: end, addressFront :searchAddress, addressETC : detailAddress})
    if (data.serviceOption !== null) {
      let copy = serviceitem;
      const yap = data.serviceOption.split("");
      yap.map((number) => {
        for (let el of serviceOption) {
          if (number === el.id) {
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

  const closeActive = () =>{
    setEdit(false)
  }

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
    // console.log(banners,'banners')
    // console.log(bannerDetail,'bannerDetail')
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
console.log(state)

    const targetName = e.target.name;
    const targetId = e.target.id;
    // console.log(targetId)
    // console.log(e.target.value)
    if (targetName === "serviceOption") {
      const {
        target: { checked },
      } = e;
      setService({ ...serviceitem, [e.target.id]: checked });
    } else if (targetName === "openTime") {
      if(targetId === 'open'){
        setState({...state, [targetId] : e.target.value})
      }else if(targetId === 'close'){
        setState({...state, [targetId] : e.target.value})
      }
    }
    else {
      setState({ ...state, [targetName]: e.target.value });
    }
    // console.log(state);

  };

  const handleSubmit = () => {
    let temp = [];
    if (serviceitem !== []) {
      for (let service in serviceitem) {
        if (serviceitem[service] === true) {
          // temp = temp + service;
          let find = serviceOption.find(ele=> ele.content == service).id
          temp.push(find)
        }
      }
      temp = temp.join(',')
    }
    console.log(temp,"temp")
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
        serviceOption: temp,
        address: state.addressFront + " " + state.addressETC,
        // thumbnail: state.bannerPhoto,
        gpsX: gps.gpsX,
        gpsY: gps.gpsY,
        openTime : state.open + "-" + state.close,
      });
      const newForm = new FormData();
      newForm.append("thumbnail", banners[0]);
      newForm.append("barName", state.barName);
      newForm.append("defaultSeat", state.defaultSeat);
      newForm.append("area", state.area);
      newForm.append("gpsX", gps.gpsX);
      newForm.append("gpsY", gps.gpsY);
      newForm.append("address", state.addressFront + " " + state.addressETC);
      newForm.append("serviceOption", temp);
      newForm.append("mobile", state.mobile);
      newForm.append("openTime", state.open + "-" + state.close);
      newForm.append("jazzbarId", initialState.jazzBarId);
      for (var pair of newForm.entries()) { console.log(pair[0]+ ', ' + pair[1]); }
    axios
      .post(process.env.REACT_APP_DB_HOST + "/jazzbarUpdate", newForm, {
        headers: {
          authorization: initialState.token,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((res) => {
        const token1 = res.data.data.accessToken;
        if(token1 !== {}){
          dispatch(setToken(token1));
        }
      })
      // .then(
      //   axios.post(
      //     process.env.REACT_APP_DB_HOST + "/menuCreate",
      //     { state, jazzBarId },
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //       withCredentials: true,
      //     }
      //   )
      // );
    closeActive()

    }

    
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
                  defaultValue={state.barName}
                  onChange={handleInput}
                  name="barName"
                ></input>
              ) : (
                <div className="barcontents">{state.barName}</div>
              )}
            </div>

            <div className="barAddress boxop">
              <div className="barlabel">소재지</div>
              {editActive ? (
                <div className="barcontents adrset">
                  <input
                    className="adrform inputform"
                    type="text"
                    defaultValue={state.addressFront}
                    onChange={handleInput}
                    value={state.addressFront}
                    name="address"
                    readOnly
                  ></input>
                   <input
                      className="inputform"
                      type="text"
                      placeholder="상세주소"
                      name="addressETC"
                      defaultValue={state.addressETC}
                      onChange={handleInput}
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
                </div>
              ) : (
                <div className="barcontents">{state.address}</div>
              )}
            </div>

            <div className="barMobile boxop">
              <div className="barlabel">연락처</div>
              {editActive ? (
                <input
                  className="barcontents inputform"
                  type="text"
                  defaultValue={state.mobile}
                  onChange={handleInput}
                  name="mobile"
                ></input>
              ) : (
                <div className="barcontents">{state.mobile}</div>
              )}
            </div>

            <div className="barMobile boxop">
              <div className="barlabel">영업시간</div>
              {editActive ? (
                <>
                {/* className="barcontents inputform" */}
                <input className ="" id="open" type="time" name="openTime"  onChange={handleInput} defaultValue={start}></input>
                ~
                <input className ="" id="close" type="time" name="openTime"  onChange={handleInput} defaultValue={end}></input>
                </>
              ) : (
                <div className="barcontents">{state.openTime}</div>
              )}
            </div>

            <div className="defaultSeat boxop">
              <div className="barlabel">좌석수</div>
              {editActive ? (
                <input
                  className="barcontents inputform"
                  type="number"
                  defaultValue={state.defaultSeat}
                  onChange={handleInput}
                  name="defaultSeat"
                ></input>
              ) : (
                <div className="barcontents">{state.defaultSeat}</div>
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
                          if (number === el.id) {
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
