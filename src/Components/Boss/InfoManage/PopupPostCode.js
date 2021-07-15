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

    // console.log(data);
    const ar = fullAddress.split(" ");
    const area = `${ar[0]} ${ar[1]}`;
    setAddress(fullAddress);

    getGps(data);
    // console.log(area)
    // console.log(fullAddress);
    // console.log(data.zonecode); 우편번호
    props.onClose();
    props.setState({ ...props.state, addressFront: fullAddress, area: area });
    // console.log(props.state,'state')
  };

  function getGps(data) {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(address, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();
        setGps({ gpsY: data[0].y, gpsX: data[0].x });
        // console.log(data[0].y, data[0].x,'ㅓ데러ㅐㅑ너');
        // console.log(gps, "gpsstate!!!!!");
        map.setBounds(bounds);
        props.setGps({gpsY: data[0].y, gpsX: data[0].x, })
      }
    }
  }


  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "10%",
    width: "700px",
    height: "500px",
    padding: "7px",
    margin: "50px",
  };

  const style = {
    // display: "block",
    // position: "absolute",
    width: "100px",
    height: "50px",
    // top: "10%",
    left: "50px",
  };
  const div = {
    backgroundColor: "yellow",
    display: "block",
    position: "absolute",
    top: "10%",
    width: "700px",
    height: "500px",
    padding: "7px",
    margin: "50px",
    left: "50px",
  };

  return (
    <div style={div}>
      <button
        style={style}
        onClick={() => {
          props.onClose();
        }}
        className="postCode_btn"
      >
        닫기
      </button>
      <div
        id="myMap"
        // style={{
        //   width: '100px',
        //   height: '100px',
        // }}
      ></div>

      <DaumPostcode
        style={postCodeStyle}
        onComplete={handlePostCode}
      ></DaumPostcode>
    </div>
  );
};

export default PopupPostCode;
