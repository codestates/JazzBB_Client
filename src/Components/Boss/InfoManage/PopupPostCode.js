import React from "react";
import DaumPostcode from "react-daum-postcode";

const { kakao } = window;



const PopupPostCode = (props) => {
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
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(fullAddress, function(result, status) {
         if (status === kakao.maps.services.Status.OK) {
            props.setGps({gpsY: result[0].y, gpsX: result[0].x})
    props.setState({ ...props.state, addressFront: fullAddress, area: area, gpsY :result[0].y, gpsX: result[0].x });

        } 
    });
    props.onClose();
   

  };





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
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode}></DaumPostcode>
    </div>
  );
};

export default PopupPostCode;
