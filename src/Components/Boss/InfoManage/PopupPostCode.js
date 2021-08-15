import React, {  useState } from "react";
import DaumPostcode from "react-daum-postcode";

const { kakao } = window;

const PopupPostCode = (props) => {
  const [address, setAddress] = useState("수내중학교");
  // const [gps, setGps] = useState("");
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
    props.setState({ ...props.state, addressFront: fullAddress, area: area });
    props.onClose();

  };

  function getGps(data) {

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(address, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        props.setGps({gpsY: data[0].y, gpsX: data[0].x, })
      }
    }
  }


  const postCodeStyle = {
    display: "flex",
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
    display: "flex",
    top: "10%",
    width: "70.5%",
    height: "552px",
    // padding: "7px",
    margin: "5px",
    minWidth: "500px",
    flexDirection: "column",
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
