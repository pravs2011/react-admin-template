import React from "react";
import LeftSideBar from "../SideBar/LeftSideBar";
import TopBar from "../TopBar/TopBar";

const MainContent = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <LeftSideBar />
        {/* Left Sidebar End */}
        {/* </div> */}

        <div className="content-page">
          <div className="content">
            <TopBar />
            {/* Main content here  */}
            {children}
            {/* <PatientList /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
