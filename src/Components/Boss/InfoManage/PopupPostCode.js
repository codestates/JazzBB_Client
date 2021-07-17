import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const { kakao } = window;

const PopupPostCode = (props) => {
  const [address, setAddress] = useState("수내중학교");
  const [gps, setGps] = useState("");
  const handlePostCode = (data) => {

    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    const ar = fullAddress.split(" ");
    const area = `${ar[0]} ${ar[1]}`;
    setAddress(fullAddress);
    getGps(data);
    // console.log(data.zonecode); 우편번호
    props.setState({ ...props.state, addressFront: fullAddress, area: area });
    props.onClose();

  };

  function getGps(data) {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    // const container = document.getElementById("myMap");
    // const options = {
    //   center: new kakao.maps.LatLng(33.450701, 126.570667),
    //   level: 3,
    // };
    // const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(address, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();
        setGps({ gpsY: data[0].y, gpsX: data[0].x });
        // map.setBounds(bounds);
        props.setGps({gpsY: data[0].y, gpsX: data[0].x, })
      }
    }
  }


  const postCodeStyle = {
    display: "block",
    top: "-2%",
    // width: "700px",
    width: "98%",
    height: "500px",
    padding: "7px",
  };

  const style = {
    display: "block",
    width: "100px",
    height: "30px",
    margin:"5px",
  };

  const div = {
    backgroundColor: "royalblue",
    display: "block",
    top: "10%",
    // width: "712px",
    width: "70.5%",
    height: "552px",
    padding: "7px",
    margin: "5px",
    minWidth: "500px",
  };

  return (
    <div style={div}>
      <button className="postCode_btn" style={style} onClick={() => {props.onClose();}} >닫기</button>
      {/* <div id="myMap"></div> */}

      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode}></DaumPostcode>
    </div>
  );
};

export default PopupPostCode;
