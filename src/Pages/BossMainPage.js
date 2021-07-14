import React from "react";
import Sidebar from "../Components/Boss/Sidebar";
import "../css/sidebar.css";
import "../css/BossMainPage.css";
import JazzBarPage from "./JazzBarPage";

function BossMainPage() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="">
        <JazzBarPage></JazzBarPage>
      </div>
    </div>
  );
}

export default BossMainPage;
