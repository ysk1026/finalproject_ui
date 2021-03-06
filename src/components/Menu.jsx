import React from "react";
import { NavLink } from "react-router-dom";

const active = {
  marginTop: "25px",
  width: "100%",
  height: "53px",
  color: "var(--greenish-teal)",
  fontSize: "22px",
  fontFamily: "NanumSquareEB",
  textAlign: "center",
  textDecoration: "none",
  borderLeft: "5px solid var(--greenish-teal)",
};

const Menu = () => {
  return (
    <div>
      <div className="menu-container">
        {/* <NavLink className="link-list" to="/home" activeStyle={active}>
          홈
        </NavLink> */}
        <NavLink className="link-list" activeStyle={active} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="link-list" activeStyle={active} to="/reviewupdate">
          게시글 작성
        </NavLink>
        <NavLink className="link-list" activeStyle={active} to="/Signin">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
