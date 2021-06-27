import React, { Component, useState } from "react";
import { Link } from 'react-router-dom'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  import "react-pro-sidebar/dist/css/styles.css";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { CgMusicNote } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsBook } from "react-icons/bs";

    const Sidebar = () => {
        const [openClose, setOpenClose] = useState(false) 
      const menuIconClick = () => {
        // openClose ? setOpenClose(false) : setOpenClose(true);
      };
      const [active, setactive] =useState(false)
      const menuActive =() =>{
        active ? setactive(false) : setactive(true)
      }
      return(
        <>
        <div className="sidebar">
        <div id="header">
          <ProSidebar collapsed={openClose}>
            <SidebarHeader>
            <div className="logotext">
                <p>{openClose ? "가게 이름" : "TOKYO JAZZ BAR"}</p>
              </div>
              {/* <div className="closemenu" onClick={menuIconClick}>
                {openClose ? (
                  <FiArrowRightCircle/>
                ) : (
                  <FiArrowLeftCircle/>
                )}
              </div> */}
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem  icon={<FiHome />}>
                  Home <Link to='/boss/main'/>
                </MenuItem>
                <MenuItem active={true} icon={<BsBook />}  > 예약 관리 <Link to='/boss/reservation'/></MenuItem>
                <MenuItem icon={<CgMusicNote />} > 공연 관리 <Link to='/boss/show'/></MenuItem>
                <MenuItem icon={<HiOutlinePhotograph />} > 사진관리 <Link to='/boss/photo'/></MenuItem>
                <MenuItem icon={<RiPencilLine />} > 정보 수정 <Link to='/boss/infoedit'/></MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
        </div>
      </>

      )

}
export default Sidebar;