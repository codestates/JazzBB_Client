import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { setBossMenu, setToken, setBossJazzBar } from "../../redux/new/action";
import {Link} from 'react-router-dom'
import "./infoupdate.css";

function InfoUpdate() {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.reducer);
  const bardata = initialState.barList.filter((el) => el.id === initialState.jazzBarId);
  let data;
  if (bardata === []) {data = null;} else {data = bardata[0];}

  //barData initial setting (gps, serviceOption, address, time)
  const [state, setState] = useState(data);
  const [start, end] = data.openTime.split('-')
  const [gps, setGps] = useState({ gpsX: data.gpsX, gpsY: data.gpsY });
  const serviceOption = useSelector((state) => state.reducer.serviceOption);
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
  let searchAddress, detailAddress;
  if(data.address){
    let frontIndex = data.address.lastIndexOf(")")+1
    searchAddress=data.address.substring(0,frontIndex)
    detailAddress = data.address.substring(frontIndex, data.address.length)
  }

  console.log(state)
  //배너, 메뉴 이미지
  const [banners, setBanner] = useState([]); // 배너 -객체 
  const [bannerDetail, setBannerDetail] = useState([]); //배너 - src
  const [menuFiles, setMenufiles] = useState([]); //메뉴 - 객체
  const [menuDetail, setMenuDetail] = useState([]); //메뉴 - src
  const [editActive, setEdit] = useState(false);
  

  //오류메세지, 카카오팝업, 정보수정버튼 handling
  const [alertMsg, setalertMsg] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  const handleEditActive = () => {
    setEdit(true);
  };

  const closeActive = () =>{
    setEdit(false)
  }


  useEffect(() => {
    console.log('useEffect')
    //배너이미지 있을 때 기초 세팅
    if(data.thumbnail){
      setBannerDetail(data.thumbnail)
    }
    //서비스옵션 있을 때 기초 세팅
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

    //메뉴 이미지 불러오기
    axios.post( process.env.REACT_APP_DB_HOST + "/menuRead", {jazzbarId : initialState.jazzBarId})
    .then(res => {
      const list = res.data.data.data[0].thumbnail;
      if(list !== undefined){
        const arr = list.split(',')
        dispatch(setBossMenu(arr))
        setMenuDetail(arr)
  setState({...state, menu : arr, open : start, close: end, addressFront :searchAddress, addressETC : detailAddress})
      }
    })
  }, []);


 
 
//이미지 업로드 handling 
  const handleImageUpload = (e) => {
    let fileArr = e.target.files;
    console.log(fileArr,'1');
    console.log([...fileArr]);
    setMenufiles([...fileArr]);

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
          setMenuDetail([...fileURLs]);
      setState({...state, menu : [...fileURLs]})
        };
        reader.readAsDataURL(file);
      }
    }
  };
  const handleBannerImg = (e) => {
    const BannerArr = e.target.files;
    setBanner([...BannerArr]);
    let fileURLs = [];
    let file = BannerArr[0];

    let reader = new FileReader();
    reader.onload = () => {
      fileURLs[0] = reader.result;
      setBannerDetail([...fileURLs]);
      setState({...state, thumbnail: [...fileURLs]})
    };
    reader.readAsDataURL(file);
  };
 
  //입력 handling
  const handleInput = (e) => {
    const targetName = e.target.name;
    const targetId = e.target.id;
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

  };

  //제출 handling
  const handleSubmit = () => {
    console.log(state.thumbnail,'thumbnail')
    console.log(banners,'banners')
    let temp = [];
    if (serviceitem !== []) {
      for (let service in serviceitem) {
        if (serviceitem[service] === true) {
          // temp = temp + service;
          let find = initialState.serviceOption.find(ele=> ele.content === service).id
          temp.push(find)
        }
      }
      temp = temp.join(',')
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
        // menu : menuFiles
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
        console.log('jazzbarUpdate')
        const token1 = res.data.data.accessToken;
        console.log('jazzbarRes', res.data)
        if(token1 !== {}){
          dispatch(setToken(token1));
        }
      })
      .then(()=>{
        const menuFormData = new FormData();
        for (let i = 0; i < menuFiles.length; i++) {
          menuFormData.append(`thumbnail`, menuFiles[i]);
        }
        menuFormData.append(`jazzbarId`, initialState.jazzBarId);
      // for (var form of menuFormData.entries()) { console.log(form[0]+ ', ' + form[1]); }
        axios.post(
          process.env.REACT_APP_DB_HOST + "/menuUpdate",
          menuFormData ,
          {
            headers: {
              authorization: initialState.token,
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        )
        .then(res =>{
          console.log('menuUpdate')
        console.log('menuUpdate', res)

        })
       
      }
      );
    closeActive()
    }
  };
 

  return (
    <div>
      <Sidebar></Sidebar>
      {initialState.jazzBarId === null ? (
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
                      {initialState.serviceOption.map((el) => (
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
                    {state.menu[0] !== "" ? (state.menu.map((el) => (
                      <img
                        className="add-thumbnail"
                        src={el}
                        alt="" 
                      ></img>
                    ))) : (<h4>등록된 이미지가 없습니다.</h4>)}
                  </div>
                ) 
                : state.menu  ? (
                  state.menu.map((el) => (
                    <img className="menuthumbnail" src={el} alt="" />
                  ))
                ) : (
                  <h4>등록된 이미지가 없습니다.</h4>
                )
                }
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
                      ></img>
                    </div>
                  ) : (
                    <img
                      className="bannerthumbnail"
                      src={state.thumbnail}
                      alt=""
                    />
                  )
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
