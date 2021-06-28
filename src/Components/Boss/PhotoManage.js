import React, { Component, useState } from "react";
import Sidebar from "./Sidebar";
import './RvManage.css'
function PhotoManage() {
  return (
    <div>
      <Sidebar></Sidebar>
    <div className="contentBox">
       사진 수정
    </div>
    </div>
  );
}

export default PhotoManage;
