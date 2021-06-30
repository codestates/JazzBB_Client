import React from "react";
import { MdDateRange} from "react-icons/md";
import { BiTime, BiWon} from "react-icons/bi";
import { BsMusicNoteList} from "react-icons/bs";
import { MdContentPaste} from "react-icons/md";
import { FaBookOpen} from "react-icons/fa";


function AllShowEntry({ data }) {
  const content = data.content;

  const player = (el) => {
    console.log(el, "eelleeee");
    const key = Object.keys(el)[0];
    return <div>{`${key} :: ${el[key]}`}</div>;
  };

  return (
    <div className="oneShow-box">
      <div className="oneShow-thumbnail">
        <img src="/img/tokyoJazz.jpg" alt="" width="200" height="265"></img>
      </div>
      <div className="oneShow-info">
        <div className="oneShow-date">
          <div className="data-title"> <MdDateRange/></div>
          <div className="data-date">{data.date}</div>
        </div>
        <div className="oneShow-time">
          <div className="data-title"><BiTime/> </div>
          <div className="data-time"> {data.time} </div>
        </div>
       
        <div className="oneShow-charge">
          <div className="data-title"><BiWon/></div>
          <div className="data-charge"> {`${data.showCharge}`}</div>
        </div>
        <div className="oneShow-player">
          <div className="data-title"> <BsMusicNoteList/></div>
          <div className="data-player">
          {data.player.map((el) => player(el))}
        </div>
        </div>
        <div className="oneShow-content">
          <div className="data-title"><FaBookOpen/></div>
          <div className="data-content">
            {" "}
            {data.content.length >= 80
              ? `${content.slice(0, 50)}...더보기`
              : content}
          </div>
        </div>
      </div>

      <div className="oneShow-button-box">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default AllShowEntry;
