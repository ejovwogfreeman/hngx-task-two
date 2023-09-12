import React from "react";
import logo from "../images/tv.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>MovieBox</span>
      </div>
      <div className="search">
        <input type="text" placeholder="what do you want to watch?" />
        <BsSearch />
      </div>
      <div className="auth">
        <span>Sign In</span>
        <div className="icon">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
