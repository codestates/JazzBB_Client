import AddShowInput from "./AddInput";

function AddShow() {
  // let iconStyles = {fontSize: "5em" };

  const addInputTime = () => {
    return <input type="text"></input>;
  };
  return (
    <div>
      <div className="show-box">
        <div className="top-box">
          <div className="show-innerbox">
            <div className="show-box_photo">
              <div className="show-photo">
                <img src="/img/addphoto.png" alt="" />
              </div>
            </div>

            <div className="show-box_input">
              <AddShowInput></AddShowInput>
            </div>

            <div className="show-box_content">
              <div className="show-description">
                <textarea rows="13" cols="27"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-box">
          <button>등록</button>
        </div>
      </div>
    </div>
  );
}

export default AddShow;
