import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { useDispatch, useSelector } from 'react-redux'
import "react-pro-sidebar/dist/css/styles.css";
import { FiSidebar, FiHome} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { CgMusicNote } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import "./sidebar.css";
import "../../../src/dist/css/comm.css"


const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer);
  const thisBar = state.barList.find(el => el.id === state.currentJazzbar)
  const [openClose, setOpenClose] = useState(false);
  const menuIconClick = () => {
    openClose ? setOpenClose(false) : setOpenClose(true);
  };
  // const [active, setactive] = useState(false);
  // const menuActive = () => {
  //   active ? setactive(false) : setactive(true);
  // };

  return (
    <div>
      <div className="sidebar">
        
        <div id="header">
          <ProSidebar collapsed={openClose}>
            <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
                {openClose ? <FiSidebar /> : <FiSidebar />}
              </div>
              <div className="logotext">
                <p>{thisBar ? thisBar.barName : '재즈바바'}</p>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
               
                <MenuItem className="tag" icon={<FiHome />}>
                  Home <Link to="/boss/main" />
                </MenuItem>
               
                <MenuItem
                className="tag"
                  icon={<BsBook />}
                >
                  예약관리 <Link to="/boss/reservation" />
                </MenuItem>
                <MenuItem className="tag" icon={<CgMusicNote />}>
                  공연관리 <Link to="/boss/show" />
                </MenuItem>
                <MenuItem className="tag" icon={<HiOutlinePhotograph />}>
                  사진관리 <Link to="/boss/photo" />
                </MenuItem>
                <MenuItem className="tag" icon={<RiPencilLine />}>
                  정보수정 <Link to="/boss/infoedit" />
                </MenuItem>
              </Menu>
            </SidebarContent>
            {/* <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
            </SidebarFooter> */}
          </ProSidebar>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
