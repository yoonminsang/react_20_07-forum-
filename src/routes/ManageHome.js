import React, { useEffect } from "react";
import "./stylesheets/Manage.css";
import { ManageHeader, ManageMenu, MaHome } from "../components";
import { Footer } from "../containers";
const ManageHome = () => {
  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <MaHome></MaHome>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageHome;
