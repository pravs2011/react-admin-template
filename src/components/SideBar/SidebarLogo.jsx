import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLogo = () => {
  return (
    <>
      {/* LOGO */}
      <NavLink to="/" className="logo text-center logo-light">
        <span className="logo-lg">
          <img
            src="/assets/images/icare/icare-logo_trans_01.png"
            alt
            height={40}
          />
        </span>
        <span className="logo-sm">
          <img src="/assets/images/icare/icare-logo_sm.png" alt height={40} />
        </span>
      </NavLink>
      {/* LOGO */}
      <NavLink to="index.html" className="logo text-center logo-dark">
        <span className="logo-lg">
          <img src="/assets/images/icare-logo_trans_01.png" alt height={16} />
        </span>
        <span className="logo-sm">
          <img src="/assets/images/icare/icare-logo_sm.png" alt height={16} />
        </span>
      </NavLink>
    </>
  );
};

export default SidebarLogo;
