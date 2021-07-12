import React from "react";
import DaumPostcode from "react-daum-postcode";

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

    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    props.onClose();
    props.setState({ ...props.state, addressFront: fullAddress });
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "10%",
    width: "700px",
    height: "500px",
    padding: "7px",
    margin: "50px",
  };

  const style= {
    // display: "block",
    // position: "absolute",
    width: "100px",
    height: "50px",
    // top: "10%",
    left : "50px"
  }
  const div= {
    backgroundColor: "yellow",
    display: "block",
    position: "absolute",
    top: "10%",
    width: "700px",
    height: "500px",
    padding: "7px",
    margin: "50px",
    left : "50px"

  }
  
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
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode}>
      </DaumPostcode>
      
     
     
    </div>
  );
  }

export default PopupPostCode;
