import { BiPlusCircle} from "react-icons/bi";
import AddShowInput from "./AddInput"


function AddShow (){
  // let iconStyles = {fontSize: "5em" };

    const addInputTime = () =>{

        return(
          <input type="text"></input>
        )
      }
    return(
        <div>
            <div className="show-box">
          <div className="top-section">
            <div className="show-photo-box">
              <div className="show-photo">
                <img src="/img/addphoto.png" alt="" />
              </div>
            </div>

            <div className="inputBox">
              <BiPlusCircle />
              <AddShowInput></AddShowInput>

            </div>
            </div>

            <div className="bottom-section">
              <div className="show-description">
                <textarea rows="15" cols="100"></textarea>
              </div>

              <div className="show-button">
                <button>저장</button>
                <button>삭제</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default AddShow;