import React from "react";
import JazzBarPage from "../../Pages/JazzBarPage";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div>
      <Sidebar></Sidebar>

      <div>
        <JazzBarPage></JazzBarPage>
      </div>
    </div>
  );
}

export default Home;
