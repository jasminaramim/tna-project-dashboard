import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

const MainContent = () => {
  return (
    <div className="flex-1 ">
      <div className="sticky top-0 z-50"><DashboardNavbar  /></div>
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;