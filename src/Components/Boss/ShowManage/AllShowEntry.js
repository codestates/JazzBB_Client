import React, { useState } from "react";
import { BiWon } from "react-icons/bi";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { BsMusicNoteList } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function AllShowEntry({ data }) {
  const classes = useStyles();
  const content = data.content;
  let array = [];
  for(let name in data.player){
    array.push([name, data.player[name]])
  }
  const player = (el) => {
      return <div>{`${el[0]} :: ${el[1]}`}</div>

  };
 

  // const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
    // setEdit(false);
  }
  return (
    <div>
      <div className="card-outer-box">
        <div className="card-box">
          {/* 카드왼쪽박스 */}
          <div className="left-box">
            <div className="left-top">
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                title={data.date}
                subheader={data.time}
              />
            </div>
            <div className="left-middle">
              {data.thumbnail ? (
                <img src={data.thumbnail} alt=""></img>
              ) : (
                <img src="/img/tokyoJazz.jpg" alt=""></img>
              )}
            </div>
          </div>
          <div className="right-box">
            <div className="right-box-top">
              <div className="hamicon" onClick={toggleModal}>
                <Link
                  to={{
                    pathname: "/boss/modaledit",
                    // search: "?sort=name",
                    // hash: "#the-hash",
                    state: { info : data },
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className={classes.margin}
                  >
                    편집
                  </Button>
                </Link>
              </div>
            </div>
            <div className="right-box-bottom">
              <div className="oneShow-charge">
                <div className="data-title">
                  <BiWon />
                </div>
                <div className="data-charge"> {`${data.showCharge}`}</div>
              </div>
              <div className="oneShow-player">
                <div className="data-title">
                  {" "}
                  <BsMusicNoteList />
                </div>
                <div className="data-player">
                  {array.map(el => player(el))}
                </div>
              </div>
              <div className="oneShow-content">
                <div className="data-title">
                  <FaBookOpen />
                </div>
                <div className="data-content">
                  {" "}
                  {data.content.length >= 80
                    ? `${content.slice(0, 50)}...더보기`
                    : content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllShowEntry;
