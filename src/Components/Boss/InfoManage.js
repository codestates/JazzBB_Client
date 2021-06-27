import React, { Component, useState } from "react";
import Sidebar from "./Sidebar";
import './RvManage.css'
function InfoManage() {
  return (
    <div>
      <Sidebar></Sidebar>
    <div className="contentBox">
      <h1>정보 수정</h1>
    </div>
    </div>
  );
}

export default InfoManage;
